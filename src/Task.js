const Task = ({ tasks, DeleteTask, searchWords}) => {

    const filterTaskFunc = (task) => {
        if(searchWords === "" || searchWords === undefined)
          return true;
        return task.taskBody.includes(searchWords) || task.taskCreatedDate.includes(searchWords);
    };

    let filteredTask = tasks.filter(task => filterTaskFunc(task));

    return (
        <div className="task-container">
            {filteredTask.map((task, index) => (
                <div className="task-card" key={index} style = {{background: task.bgColor}}>
                    <p className="task-body">{ task.taskBody }</p>
                    <p className="task-date">{ task.taskCreatedDate }</p>
                    <button className="delete-btn" type="button" onClick = {() => DeleteTask(task.id)}>
                        <img src="./images/bin.svg" alt="edit button"/>
                    </button>
                </div>
            ))}
        </div>
    )
};

export default Task;