import { useNavigate } from "react-router-dom";
import { addTask } from "./Task";

export default function AddTask() {

    const navigate = useNavigate();

    const appendATask = () => {
        let taskName = document.getElementById("taskNameInput").value;
        let taskDescription = document.getElementById("taskDescriptionInput").value;
        let taskDeadline = document.getElementById("taskDeadlineInput").value;
        let taskPriority = document.getElementById("taskPriorityInput").value;

        let newTask = {
            name: taskName,
            description: taskDescription,
            deadline: taskDeadline,
            priority: taskPriority,
            completed: false
        }

        addTask(newTask);

        document.getElementById("taskNameInput").value = "";
        document.getElementById("taskDescriptionInput").value = "";
        document.getElementById("taskDeadlineInput").value = "";
        document.getElementById("taskPriorityInput").value = "1";

        navigate("/taskList");
    }


    return (
        <form className="container">
            <div className="row g-3 align-items-center justify-content-evenly m-2">
                <div className="col-auto">
                    <label htmlFor="taskNameInput" className="col-form-label">Task Name</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="taskNameInput" className="form-control" />
                </div>
                <div className="col-auto">
                    <label htmlFor="taskDescriptionInput" className="col-form-label">Task Description</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="taskDescriptionInput" className="form-control" />
                </div>
            </div>
            <div className="row g-3 align-items-center justify-content-evenly m-2">
                <div className="col-auto">
                    <label htmlFor="taskDeadlineInput" className="col-form-label">Task Deadline</label>
                </div>
                <div className="col-auto">
                    <input type="date" id="taskDeadlineInput" className="form-control" />
                </div>
                <div className="col-auto">
                    <label htmlFor="taskPriorityInput" className="col-form-label">Task Priority</label>
                </div>
                <div className="col-auto">
                    <select id="taskPriorityInput" className="form-select">
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 align-self-center justify-content-evenly m-2">
                <div className="col-auto">
                    <button type="button" className="btn btn-primary" onClick={appendATask}>Add Task</button>
                </div>
            </div>
        </form>
    )
}