import React, { useState } from "react"
import "./app.css"

function App() {

  const [toggle, setToggle] = useState(false);

  const toggleFunc = () => {
    setToggle(!toggle)
  }
  console.log("update!")
  return (
    <div className={toggle ? "container change" : "container"}>
      <button onClick={toggleFunc}>TOGGLE</button>

    </div>
  ) 
}

export default App;
