import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import HomePage from "./pages/HomePage";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  //   };
  //   getTasks();
  // }, []);

  // // Fetch tasks
  // const fetchTasks = async () => {
  //   const res = await fetch("http://localhost:5000/tasks");
  //   const data = await res.json();
  //   return data;
  // };

  // // Fetch single task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`);
  //   const data = await res.json();
  //   return data;
  // };

  // const addTask = async (task) => {
  //   const res = await fetch("http://localhost:5000/tasks", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(task),
  //   });

  //   const data = await res.json();
  //   setTasks([...tasks, data]);

  //   // const id = Math.floor(Math.random() * 1000) + 1;
  //   // const newTask = {id, ...task};
  //   // setTasks([...tasks, newTask]);
  // };

  // const deleteTask = async (id) => {
  //   await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: "DELETE",
  //   });
  //   const filtertedTasks = tasks.filter((task) => task.id !== id);
  //   setTasks(filtertedTasks);
  // };

  // const toggleReminder = async (id) => {
  //   const taskToToggle = await fetchTask(id);
  //   const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updateTask),
  //   });

  //   const data = await res.json();
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: data.reminder } : task
  //     )
  //   );
  // };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {/* {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Tasks"
        )} */}
        <Routes>

         <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
