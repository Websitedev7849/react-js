import { useState } from 'react';
import  Navbar  from "./Navbar";
import AddTask from "./AddTask";
import Task from "./Task";
import AddTaskWindow from './AddTaskWindow';

function App() {

  
  let [tasks, useTasks] = useState([]);

  const [isAddTaskWindowOpen, setIsTaskWindowOpen] = useState(false); 

  const openOrCloseAddTaskWindow = () => {
    isAddTaskWindowOpen? setIsTaskWindowOpen(false) : setIsTaskWindowOpen(true);
  };

  const DeleteTask = (id) => {
    const newTasks = tasks.filter((task, index) => task.id !== id);
    useTasks(newTasks);
  };

  let [searchWords, setSearchWord] = useState("");
  
    const filteredTask = (task) => {
      if(searchWords === "" || searchWords === undefined)
        return true;
      return task.taskBody.includes(searchWords) || task.taskCreatedDate.includes(searchWords);
    }

  return (
    <div className="App">
      <section className="main">
        <Navbar setSearchWord = {setSearchWord} />
        {!isAddTaskWindowOpen && <Task tasks={tasks.filter(task => filteredTask(task))} DeleteTask={ DeleteTask }/>}
        {isAddTaskWindowOpen && <AddTaskWindow openOrCloseAddTaskWindow={openOrCloseAddTaskWindow} tasks={tasks} useTasks={useTasks} /> }
        {!isAddTaskWindowOpen && <AddTask openOrCloseAddTaskWindow={openOrCloseAddTaskWindow}/> }
      </section>
    </div>
  );
}

export default App;
