import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let state ={
    count: 0
  }

  function onClickHandeler(){
    alert("hi")
  }

  return (
    <div>
      <button onClick={onClickHandeler}>Counter {state.count}</button>
    </div>
  );
}

export default App;
