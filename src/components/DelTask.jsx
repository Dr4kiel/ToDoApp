import { useParams, useNavigate } from "react-router-dom";

export default function DelTask(props) {

    const { index } = useParams();

    let tasks = props.tasks;
    let setTasks = props.setTasks;

    const navigate = useNavigate();

    function deleteATask() {
        tasks.splice(index, 1);
        setTasks([...tasks]);
        navigate("/taskList");
    }

    return (
        <>
            <div className="container">
                <div className="row g-3 align-items-center justify-content-evenly m-2">
                    <div className="col-auto">
                        <h2>Are you sure you want to delete this task?</h2>
                    </div>
                </div>
                <div className="row g-3 align-items-center justify-content-evenly m-2">
                    <div className="col-auto">
                        <button className="btn btn-danger" onClick={deleteATask}>Delete</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={() => {
                            navigate("/taskList")
                        }}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}