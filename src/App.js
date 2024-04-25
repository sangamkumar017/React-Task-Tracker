// App.js
import React, { useState, useEffect } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const mappedTasks = data.map((task) => ({
          id: task.id,
          text: task.title,
          completed: task.completed,
        }));
        setTasks(mappedTasks);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addTask = (text) => {
    if (text.trim() !== "") {
      const newTaskObj = { id: Date.now(), text: text, completed: false };
      setTasks([newTaskObj, ...tasks]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>React Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter setFilter={setFilter} setSearchText={setSearchText} />
      <TaskList
        tasks={tasks.filter(
          (task) =>
            (filter === "all" ||
              (filter === "completed" && task.completed) ||
              (filter === "incomplete" && !task.completed)) &&
            task.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
