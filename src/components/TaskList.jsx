import { Link, useNavigate } from "react-router-dom";
import {
    searchATask, switchCompleted,
    sortByDeadline, sortByDefault, sortByPriority,
    filterByCompleted, filterByPriority, filterByUncompleted, noFilter
} from "./Task";


export default function TaskList(props) {

    let tasks = props.tasks;

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Task List</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <Link className="btn btn-primary col" to="/addTask">Add Task</Link>
                        <div className="col"></div>
                        <select name="filter" id="filter" className="form-select col" onChange={e => {
                            if (e.target.value === "completed") {
                                filterByCompleted();
                            } else if (e.target.value === "uncompleted") {
                                filterByUncompleted();
                            } else if (e.target.value === "Low") {
                                filterByPriority("1");
                            } else if (e.target.value === "Medium") {
                                filterByPriority("2");
                            } else if (e.target.value === "High") {
                                filterByPriority("3");
                            } else {
                                noFilter();
                            }
                        }}>
                            <option value="default">No Filter</option>
                            <option value="completed">Filter by Completed</option>
                            <option value="uncompleted">Filter by Uncompleted</option>
                            <option value="Low">Filter by Low Priority</option>
                            <option value="Medium">Filter by Medium Priority</option>
                            <option value="High">Filter by High Priority</option>
                        </select>
                        <div className="col"></div>
                        <select name="sort" id="sort" className="form-select col" onChange={e => {
                            if (e.target.value === "priority") {
                                sortByPriority();
                            } else if (e.target.value === "deadline") {
                                sortByDeadline();
                            } else {
                                sortByDefault();
                            }
                        }}>
                            <option value="default">Sort by Default</option>
                            <option value="priority">Sort by Priority</option>
                            <option value="deadline">Sort by Deadline</option>
                        </select>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Completion</th>
                                <th scope="col">Task Name</th>
                                <th scope="col">Task Description</th>
                                <th scope="col">Task Deadline</th>
                                <th scope="col">Task Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => {
                                return (
                                    <tr key={index} className={task.completed ? "table-secondary" : task.priority === "1" ? "table-success" : task.priority === "2" ? "table-warning" : "table-danger"}>
                                        <td><input type="checkbox" name="complete" id="complete" checked={task.completed} className="form-check-input" onChange={() => {
                                            switchCompleted(searchATask(index));
                                            sortByDefault();
                                            document.querySelector("#sort").value = "default";
                                            document.querySelector("#filter").value = "default";
                                        }} /></td>
                                        <td>{task.name}</td>
                                        <td>{task.description}</td>
                                        <td>{task.deadline}</td>
                                        <td>{task.priority === "1" ? "Low" : task.priority === "2" ? "Medium" : "High"}</td>
                                        <td className="p-0 text-end">
                                            <span className="material-symbols-outlined btn" width="20px" onClick={() => {
                                                navigate('/editTask/' + index);
                                            }}>
                                                edit
                                            </span>
                                            <span className="material-symbols-outlined btn" width="20px" onClick={() => {
                                                navigate('/deleteTask/' + index);
                                            }}>
                                                remove
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}