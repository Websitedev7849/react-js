const Task = ({ tasks }) => {

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