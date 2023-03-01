import React from "react";
import Ecralogin from "./ecralogin"
import Submit from "./submit"
import Fullname from "./fullname"


var userIsRegistered = false;


function App() {
  return (   
    <div className="container">
      <Fullname/>
      <Submit/>
      <Ecralogin userIsRegistered={userIsRegistered} />
    </div>
     
  );
}

export default App;
