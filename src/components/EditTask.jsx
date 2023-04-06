import { useNavigate, useParams } from "react-router-dom";

export default function EditTask(props) {

    let tasks = props.tasks;
    const { index } = useParams();
    let setTasks = props.setTasks;

    const navigate = useNavigate();

    function updateATask() {
        let taskName = document.getElementById("taskNameInput").value || tasks[index].name;
        let taskDescription = document.getElementById("taskDescriptionInput").value || tasks[index].description;
        let taskDeadline = document.getElementById("taskDeadlineInput").value || tasks[index].deadline;
        let taskPriority = document.getElementById("taskPriorityInput").value || tasks[index].priority;

        let newTask = {
            name: taskName,
            description: taskDescription,
            deadline: taskDeadline,
            priority: taskPriority,
            completed: false
        }

        tasks[index] = newTask;
        setTasks([...tasks]);

        navigate("/taskList");
    }


    return (
        <form className="container">
            <div className="row g-3 align-items-center justify-content-evenly m-2">
                <div className="col-auto">
                    <label htmlFor="taskNameInput" className="col-form-label">Task Name</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="taskNameInput" className="form-control" placeholder={tasks[index].name} />
                </div>
                <div className="col-auto">
                    <label htmlFor="taskDescriptionInput" className="col-form-label">Task Description</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="taskDescriptionInput" className="form-control" placeholder={tasks[index].description} />
                </div>
            </div>
            <div className="row g-3 align-items-center justify-content-evenly m-2">
                <div className="col-auto">
                    <label htmlFor="taskDeadlineInput" className="col-form-label">Task Deadline</label>
                </div>
                <div className="col-auto">
                    <input type="date" id="taskDeadlineInput" className="form-control" defaultValue={tasks[index].deadline} />
                </div>
                <div className="col-auto">
                    <label htmlFor="taskPriorityInput" className="col-form-label">Task Priority</label>
                </div>
                <div className="col-auto">
                    <select id="taskPriorityInput" className="form-select" defaultValue={tasks[index].priority}>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 align-self-center justify-content-evenly m-2">
                <div className="col-auto">
                    <button type="button" className="btn btn-primary" onClick={updateATask}>Update Task</button>
                </div>
            </div>
        </form>
    )
}