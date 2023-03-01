import React, { useState } from "react";

function Submit() {
    const [name, setName] = useState("")
    const [headingText, setheadingText] = useState("")
    const [isMousedOver, setMouseOver] = useState(false)

    function handlechange(event) {
        setName (event.target.value)
        
    }
    

    function handleClick() {
        setheadingText(name)
    }

    

    function handleMouseOver() {
        setMouseOver(true)
    }
    function handleMouseOut() {
        setMouseOver(false)
        
    }



  return (
    <div className="container">
      <h1> Hello {headingText} </h1>
          <input
              type="text"
              placeholder="What's your name?"
              onChange={handlechange}
              value={name}
          />
          <button
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
              style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          >Submit</button>
    </div>
  );
}

export default Submit;
