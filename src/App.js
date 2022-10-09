import "./assets/App.css";
import TodoList from "../src/components/todo/TodoList";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css"; //4.7

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
