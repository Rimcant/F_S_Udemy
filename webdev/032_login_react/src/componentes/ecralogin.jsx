import React from "react";
import Input from "./input"


function ecralogin(props) {
  const botaoregistooulogin = props.userIsRegistered ? "login" : "Register";

    return (
        <div>
        <h1>Hello</h1>
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          {!props.userIsRegistered && <Input type="password" placeholder="Confirm Password" />}
          <button type="submit">{botaoregistooulogin}</button>
        </form>
      </div>
    )
    
}

export default ecralogin