import { useEffect } from "react";
import deleteBtn from "./assets/bin.svg";

const Task = ({ tasks, DeleteTask, searchWords}) => {

    const filterTaskFunc = (task) => {
        if(searchWords === "" || searchWords === undefined)
          return true;
        return task.taskBody.includes(searchWords) || task.taskCreatedDate.includes(searchWords);
    };

    useEffect(() => {
        
        // solve bug of github
        if (window.location.hostname === "websitedev7849.github.io") { 
            deleteBtn = "react-js/static/media/bin.5d614aef.svg";
        }
        
    }, []);

    let filteredTask = tasks.filter(task => filterTaskFunc(task));

    return (
        <div className="task-container">
            {filteredTask.map((task, index) => (
                <div className="task-card" key={index} style = {{background: task.bgColor}}>
                    <p className="task-body">{ task.taskBody }</p>
                    <p className="task-date">{ task.taskCreatedDate }</p>
                    <button className="delete-btn" type="button" onClick = {() => DeleteTask(task.id)}>
                        <img src={deleteBtn} alt="edit button"/>
                    </button>
                </div>
            ))}
        </div>
    )
};

export default Task;