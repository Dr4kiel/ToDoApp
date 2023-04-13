import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./components/Layout";
import EditTask from "./components/EditTask";
import DelTask from "./components/DelTask";
import { useSnapshot } from "valtio";
import { TaskStore } from "./components/Task";


export default function App() {


    let snap = useSnapshot(TaskStore);
    let tasks = snap.tasks;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="addTask" element={<AddTask />} />
                    <Route path="taskList" element={<TaskList tasks={tasks} />} />
                    <Route path="editTask/:index" element={<EditTask tasks={tasks} />} />
                    <Route path="deleteTask/:index" element={<DelTask tasks={tasks} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}