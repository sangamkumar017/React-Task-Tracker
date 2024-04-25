// TaskFilter.js
import React, { useState } from "react";
import Button from "@mui/material/Button";

function TaskFilter({ setFilter, setSearchText }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchText(event.target.value);
  };

  const handleFilterClick = (status) => {
    setFilter(status);
    setSearchText("");
  };

  return (
    <div className="filter-buttons" style={{ marginTop: "20px" }}>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#625E61",
          color: "white",
          padding: "13px",
          borderRadius: "10px",
          marginRight: "10px",
        }}
        onClick={() => handleFilterClick("all")}
      >
        All
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#116826",
          color: "white",
          padding: "13px",
          borderRadius: "10px",
          marginRight: "10px",
        }}
        onClick={() => handleFilterClick("completed")}
      >
        Completed
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#FF5733",
          color: "white",
          padding: "13px",
          borderRadius: "10px",
        }}
        onClick={() => handleFilterClick("incomplete")}
      >
        Incomplete
      </Button>
    </div>
  );
}

export default TaskFilter;
