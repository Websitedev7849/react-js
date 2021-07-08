import  Navbar  from "./Navbar";
import AddTask from "./AddTask";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <section className="main">
        <Navbar/>
        <Task/>
        <AddTask/>
      </section>
    </div>
  );
}

export default App;
