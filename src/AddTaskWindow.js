import { useState } from "react";
const AddTaskWindow = ({tasks, useTasks}) => {

    let [date, setDate] = useState('');
    let [text, setText] = useState(''); 
    let individualTask = {};

    let bgColors = ["#eb826f", "#bff195", "#9759e9", "#e95984", "#eb8876", "#7691eb", "#7876eb"];

    const HandleSubmit = e => {
        e.preventDefault();
        individualTask.id = new Date().getTime();
        individualTask.taskBody = text;
        individualTask.taskCreatedDate = date;
        individualTask.bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
        tasks.push(individualTask);
        useTasks(tasks);
    
        //redirecting to homepage "/"
        window.location.href = "/";
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
                <a className="form-cancel-btn" href="/">Cancel</a>
                <button className="form-submit-btn" type="submit">Add Task</button>
            </form>
        </section>
    );
}
 
export default AddTaskWindow;