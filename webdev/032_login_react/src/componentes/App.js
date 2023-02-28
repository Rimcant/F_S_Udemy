import React from "react";
import Ecralogin from "./ecralogin"


var userIsRegistered = false;


function App() {
  return (   
      <div className="container">
      <Ecralogin userIsRegistered={userIsRegistered} />
    </div>
     
  );
}

export default App;
