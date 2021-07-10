import { useState } from 'react';
import  Navbar  from "./Navbar";
import AddTask from "./AddTask";
import Task from "./Task";
import AddTaskWindow from './AddTaskWindow';

function App() {

  
  let [tasks, useTasks] = useState([
    {
     taskBody: "This is task content",
     taskCreatedDate: "May 21, 2020"
    }
    ]);

  const [isAddTaskWindowOpen, setIsTaskWindowOpen] = useState(false); 

  const openOrCloseAddTaskWindow = () => {
    isAddTaskWindowOpen? setIsTaskWindowOpen(false) : setIsTaskWindowOpen(true);
  }

  


  return (
    <div className="App">
      <section className="main">
        <Navbar/>
        {!isAddTaskWindowOpen && <Task tasks={tasks}/>}
        {isAddTaskWindowOpen && <AddTaskWindow openOrCloseAddTaskWindow={openOrCloseAddTaskWindow} tasks={tasks} useTasks={useTasks} /> }
        {!isAddTaskWindowOpen && <AddTask openOrCloseAddTaskWindow={openOrCloseAddTaskWindow}/> }
      </section>
    </div>
  );
}

export default App;
