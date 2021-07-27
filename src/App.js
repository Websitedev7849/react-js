import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  Navbar  from "./Navbar";
import AddTask from "./AddTask";
import Task from "./Task";
import AddTaskWindow from './AddTaskWindow';
import ThemeToggle from "./ThemeToggle";

function App() {
  
  
  let [tasks, useTasks] = useState([]);

  const DeleteTask = (id) => {
    const newTasks = tasks.filter((task, index) => task.id !== id);
    useTasks(newTasks);
  };

  // Search words from navigation bar
  let [searchWords, setSearchWord] = useState("");

  let [theme, useTheme] = useState("light-theme");
  
  
  return (
    <Router>
      <div className={`App ${theme}`}>

      <ThemeToggle theme={theme} useTheme={useTheme}/>

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
