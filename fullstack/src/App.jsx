import { useState } from "react";
import tasksData from "./data/tasks.json";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import AllTasks from "./pages/AllTasks";
import MainPage from "./pages/Main";
import SecondaryPage from "./pages/Secondary";
import CompletedTasks from "./pages/CompletedTasks";
import ImportantTasks from "./pages/ImportantTasks";
import UncompletedTasks from "./pages/UncompletedTasks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  const handleAddTask = (newTask) => setTasks((prev) => [...prev, newTask]);
  const handleDeleteTask = (id) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));
  const handleToggleStar = (id) =>
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, starred: !task.starred } : task
      )
    );
  const handleToggleCompleted = (id) =>
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  const handleEditTask = (id, updatedData) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedData } : task))
    );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout tasks={tasks} onAddTask={handleAddTask} />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <AllTasks
                tasks={tasks}
                onToggleStar={handleToggleStar}
                onToggleComplete={handleToggleCompleted}
                onDelete={handleDeleteTask}
                onEditTask={handleEditTask}
              />
            }
          />
          <Route
            path="main"
            element={
              <MainPage
                tasks={tasks}
                onToggleStar={handleToggleStar}
                onToggleComplete={handleToggleCompleted}
                onDelete={handleDeleteTask}
                onEditTask={handleEditTask}
              />
            }
          />
          <Route
            path="secondary"
            element={
              <SecondaryPage
                tasks={tasks}
                onToggleStar={handleToggleStar}
                onToggleComplete={handleToggleCompleted}
                onDelete={handleDeleteTask}
                onEditTask={handleEditTask}
              />
            }
          />
          <Route
            path="completed"
            element={
              <CompletedTasks
                tasks={tasks}
                onToggleStar={handleToggleStar}
                onToggleComplete={handleToggleCompleted}
                onDelete={handleDeleteTask}
                onEditTask={handleEditTask}
              />
            }
          />
          <Route
            path="important"
            element={
              <ImportantTasks
                tasks={tasks}
                onToggleStar={handleToggleStar}
                onToggleComplete={handleToggleCompleted}
                onDelete={handleDeleteTask}
                onEditTask={handleEditTask}
              />
            }
          />
          <Route
            path="uncompleted"
            element={
              <UncompletedTasks
                tasks={tasks}
                onToggleStar={handleToggleStar}
                onToggleComplete={handleToggleCompleted}
                onDelete={handleDeleteTask}
                onEditTask={handleEditTask}
              />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
