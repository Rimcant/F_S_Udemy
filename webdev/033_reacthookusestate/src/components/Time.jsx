import React, {useState} from "react";

function Time() {
  setInterval(newTime, 1000)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  function newTime() {
    setTime(new Date().toLocaleTimeString())
  }


  return (
    <div className="container">
      <h1>{time}</h1>
      <h2></h2>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default Time;


//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
