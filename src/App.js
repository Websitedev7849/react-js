import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  Navbar  from "./Navbar";
import AddTask from "./AddTask";
import Task from "./Task";
import AddTaskWindow from './AddTaskWindow';

function App() {

  
  let [tasks, useTasks] = useState([]);

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

        <Router>
          <Switch>
            <Route exact path="/">
              <Task tasks={tasks.filter(task => filteredTask(task))} DeleteTask={ DeleteTask }/>
            </Route>
            <Route exact path="/addTaskWindow">
              <AddTaskWindow tasks={tasks} useTasks={useTasks} />
            </Route>
          </Switch>
        </Router>

        <AddTask/> 
       
      </section>
    </div>
  );
}

export default App;
