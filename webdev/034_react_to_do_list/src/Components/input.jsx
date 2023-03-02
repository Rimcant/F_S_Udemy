import React, {useState} from "react";

function Input() {
  const [task, settask] = useState("")
  const [task2, settask2] = useState([])

  function handleChange(event) {    
    return (
      settask(event.target.value)
    )  
  }

  function handleClick() {
    settask2([...task2, task])
    console.log(task2)
  }
  return (
      
    <div className="form">
      <input
        type="text"
        name="task"
        onChange={handleChange}
        value={task}
        />
        <button onClick={handleClick}>
          <span value={task}>Add</span>
      </button>
      <ul>
        {task2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        </div>
    )
}

export default Input