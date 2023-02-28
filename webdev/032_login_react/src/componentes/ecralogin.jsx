import React from "react";
import Input from "./input"


function ecralogin(props) {
     return (
        <div>
        <h1>Hello</h1>
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          {!props.userIsRegistered && <Input type="password" placeholder="Confirm Password" />}
          <button type="submit">{props.userIsRegistered ? "Login" : "Register" }</button>
        </form>
      </div>
    )
    
}

export default ecralogin