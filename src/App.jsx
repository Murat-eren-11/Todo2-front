import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import TaskAdd from "./components/TaskAdd/TaskAdd";
import Task from "./components/Tasks/Task";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center max-h-screen bg-white dark:bg-black text-black dark:text-white">
        <TaskAdd />
        <Task />
      </main>
    </>
  );
}

export default App;
