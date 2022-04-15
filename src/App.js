import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [todo, setTodo] = useState([

  ])

  const handleTodo = () => {
    setTodo(...todo,"New Todo")
    console.log("handle")
  }
  return (
    <>
    <div>    {todo}</div>
    <div>
  
      <button onClick={handleTodo}>add todo</button>
      </div>
     </>
  );
}
