import { useEffect, useState } from "react";
import axios from "axios";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/task");
        console.log(response.data);
        setTasks(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks && tasks.map((task, index) => <div key={index}>{task.name}</div>)}
    </div>
  );
};

export default Task;
