import React, { useState } from "react";
import "./app.css";




const App = () => {

  const [todoList, setTodoList] = useState([]); // todolist where we store our data, setTodoList is where we set our todoList
  const [currentTask, setCurrentTask] = useState(""); // currentTask the actual task that we write, setCurrentTask is where we set the actual task and store

    
  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    console.log(todoList)
  };


  const handleOnChange = (event) => {
      setCurrentTask(event.target.value)
  }

  return (
      <div className="App">
        <h1>Todo List</h1>
          <div>
            <input type="text" placeholder="Task" onChange={handleOnChange}/> 
            <button onClick={addTask}>ADD TASK</button>
          </div>
          <hr/>
          <ul>
              {todoList.map((value, key) => {
                  return (
                    <li>
                      {value}
                    </li>
                  )
              })}

          </ul>

      </div>
  )
}

export default App;
