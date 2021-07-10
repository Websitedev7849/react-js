import { useState } from "react";
const AddTaskWindow = ({openOrCloseAddTaskWindow, tasks, useTasks}) => {

    let [date, setDate] = useState('');
    let [text, setText] = useState(''); 
    let individualTask = {};

    const HandleSubmit = e => {
        e.preventDefault();
        individualTask.taskBody = text;
        individualTask.taskCreatedDate = date;
        tasks.push(individualTask);
        useTasks(tasks);
        
        // closing add task window on submit 
        openOrCloseAddTaskWindow();
    };

    return (
        <section className="add-task-window">
            <h1 className="form-header">ADD A TASK</h1>
            <form action="#" className="form-add-task" onSubmit = {HandleSubmit}>
                <div className="task-date-container">
                    <label htmlFor="task-date">Date</label> <br />
                    <input type="date" name="task-date" onChange={(e) => { setDate(e.target.value) }}/>
                </div>
                <div className="text-area">
                    <label htmlFor="textarea">Your Message</label> <br />
                    <textarea name="textarea"
                    cols="70" 
                    rows="12"
                    placeholder="Enter you Message here"
                    onChange={(e) => { setText(e.target.value) }}></textarea>
                </div>
                <button className="form-cancel-btn" type="button" onClick={openOrCloseAddTaskWindow}>Cancel</button>
                <button className="form-submit-btn" type="submit">Add Task</button>
            </form>
        </section>
    );
}
 
export default AddTaskWindow;