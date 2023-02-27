import React from "react";
import Ecralogin from "./ecralogin"


var userIsRegistered = false;


function App() {
  return (   

    !userIsRegistered ?
      <div className="container">
      <Ecralogin userIsRegistered={true} />
    </div>
      :
      <div className="container">
      <Ecralogin userIsRegistered={false} />
    </div>   
  );
}

export default App;
