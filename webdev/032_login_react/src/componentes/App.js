import React from "react";
import Ecralogin from "./ecralogin"
import Submit from "./submit"
import Fullname from "./fullname"
import Dados from "./complexstatepractice"


var userIsRegistered = false;


function App() {
  return (   
    <div className="container">
      <Dados/>
      <Fullname/>
      <Submit/>
      <Ecralogin userIsRegistered={userIsRegistered} />
    </div>
     
  );
}

export default App;
