import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TaskAdd = () => {
  const [newTask, setNewTask] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const addNewTask = async () => {
      try {
        const response = await axios.post("http://localhost:3000/task/add", {
          name: newTask,
        });
        console.log(response.data);
        setNewTask("");
      } catch (error) {
        console.log(error.message);
      }
    };
    addNewTask();
  }, [newTask]);

  return (
    <div className="flex flex-row">
      <TextField
        id="outlined-basic"
        label="Entrez une tâche..."
        variant="outlined"
      />
      <Button variant="outlined">
        {windowWidth <= 900 ? "+" : "Ajoutez une tâche"}
      </Button>
    </div>
  );
};

export default TaskAdd;
