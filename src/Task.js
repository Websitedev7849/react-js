const Task = ({ tasks, DeleteTask }) => {

    return (
        <div className="task-container">
            {tasks.map((task, index) => (
                <div className="task-card" key={index}>
                    <p className="task-body">{ task.taskBody }</p>
                    <p className="task-date">{ task.taskCreatedDate }</p>
                    <button className="delete-btn" type="button" onClick = {() => DeleteTask(index)}>
                        <img src="./images/bin.png" alt="edit button"/>
                    </button>
                </div>
            ))}
        </div>
    )
};

export default Task;