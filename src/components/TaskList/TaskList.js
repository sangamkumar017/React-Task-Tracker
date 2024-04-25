import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const handleChangePage = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        {currentTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      </div>
    </div>
  );
}

export default TaskList;
