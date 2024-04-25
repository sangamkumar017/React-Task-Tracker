import React from "react";
import Button from "@mui/material/Button";

function TaskItem({ task, deleteTask, toggleComplete }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", task.id);
  };

  return (
    <li
      draggable
      className={task.completed ? "completed" : ""}
      style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
      onDragStart={handleDragStart}
    >
      <span
        style={{ marginRight: "10px" }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.completed ? "✔️" : "◻️"}
      </span>

      <span style={{ flexGrow: 1 }}>{task.text}</span>

      <Button
        variant="contained"
        style={{
          backgroundColor: "#A72B2B",
          color: "white",
          marginLeft: "10px",
        }}
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </Button>
    </li>
  );
}

export default TaskItem;
