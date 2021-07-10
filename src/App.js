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

  const DeleteTask = (i) => {
    const newTasks = tasks.filter((task, index) => index !== i);
    useTasks(newTasks);
  };

  return (
    <div className="App">
      <section className="main">
        <Navbar/>
        {!isAddTaskWindowOpen && <Task tasks={tasks} DeleteTask={ DeleteTask }/>}
        {isAddTaskWindowOpen && <AddTaskWindow openOrCloseAddTaskWindow={openOrCloseAddTaskWindow} tasks={tasks} useTasks={useTasks} /> }
        {!isAddTaskWindowOpen && <AddTask openOrCloseAddTaskWindow={openOrCloseAddTaskWindow}/> }
      </section>
    </div>
  );
}

export default App;
