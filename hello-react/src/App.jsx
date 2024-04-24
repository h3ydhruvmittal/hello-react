import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    let newToDo = [];
    console.log(newToDo)
    for (let i = 0; i < todos.length; i++) {
      newToDo.push(todos[i]);
    }
    newToDo.push({
      title: "Web Development",
      description: "Day 23",
    });
    setTodos(newToDo);
  }

  return (
    <div>
      <button onClick={addTodo}>add random</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div>
  );
}
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}

export default App;
