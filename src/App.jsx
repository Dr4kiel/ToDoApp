import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./components/Layout";
import EditTask from "./components/EditTask";
import DelTask from "./components/DelTask";


export default function App() {

    const [tasks, setTasks] = useState([]); // Hook

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="addTask" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
                    <Route path="taskList" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
                    <Route path="editTask/:index" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
                    <Route path="deleteTask/:index" element={<DelTask tasks={tasks} setTasks={setTasks} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}