// TaskForm.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <TextField
        type="text"
        value={newTask}
        onChange={handleChange}
        label="Enter new task"
        variant="outlined"
        style={{
          width: "30%",
          marginRight: "10px",
          height: "50px",
          textAlign: "center",
        }}  
        sx={{ "& .MuiInputBase-root": { height: "100%" } }}  
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ backgroundColor: "#625E61", height: "50px", color: "white" }}
      >
        Add Task
      </Button>
    </form>
  );
}

export default TaskForm;
