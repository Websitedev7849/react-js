import { useState } from "react";

const Task = () => {
    const [tasks, useTask] = useState([
        {taskBody: "This is task content", taskCreatedDate: "May 21, 2020" },
        {taskBody: "Next thing to do is add click event on task card to view in full size", taskCreatedDate: "May 30, 2020" },
        {taskBody: "Next thing to do is add click event on task card to view in full size", taskCreatedDate: "May 30, 2020" },
        {taskBody: "Next thing to do is add click event on task card to view in full size", taskCreatedDate: "May 30, 2020" },
        {taskBody: "Next thing to do is add click event on task card to view in full size", taskCreatedDate: "May 30, 2020" },
        {taskBody: "Next thing to do is add click event on task card to view in full size", taskCreatedDate: "May 30, 2020" },
        {taskBody: "Next thing to do is add click event on task card to view in full size", taskCreatedDate: "May 30, 2020" },
    ]);

    return (
        <div className="task-container">
            {tasks.map((task, index) => (
                <div className="task-card" key={index}>
                    <p className="task-body">{ task.taskBody }</p>
                    <p className="task-date">{ task.taskCreatedDate }</p>
                    <button className="edit-btn" type="button">
                        <img src="./images/edit.png" alt="edit button"/>
                    </button>
                </div>
            ))}
        </div>
    )
};

export default Task;