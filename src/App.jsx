import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <h2>My Todo List</h2>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
