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

  // Search words from navigation bar
  let [searchWords, setSearchWord] = useState("");

  const toggleTheme = e => {
    let target = e.target.parentElement;
    
    if (target.classList.contains("light-theme")) {
      target.classList.remove("light-theme");
      target.classList.add("dark-theme");
      return;
    }
    
    target.classList.remove("dark-theme");
    target.classList.add("light-theme");
  }
  
  return (
    <Router>
      <div className="App light-theme">
        <label htmlFor="toggle-dark-theme"></label>
        <input type="checkbox" id="toggle-dark-theme" onClick={e => toggleTheme(e)} />
        <section className="main">
          <Navbar setSearchWord = {setSearchWord} />

            <Switch>
              
              <Route exact path="/">
                <Task tasks={tasks} DeleteTask={ DeleteTask } searchWords={searchWords}/>
              </Route>

              <Route exact path="/addTaskWindow">
                <AddTaskWindow tasks={tasks} useTasks={useTasks} />
              </Route>

            </Switch>

            {/* Add task button */}
            <AddTask/> 
          
        </section>
      </div>
    </Router>
  );
}

export default App;
