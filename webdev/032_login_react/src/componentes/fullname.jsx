
import React, {useState} from "react";

function Forms() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  })

  function handleChange(event) {
    // console.log(event)
    // const newValue = event.target.value
    // const inputName = event.target.name
    // console.log(newValue)
    // console.log(inputName)
    const {value, name} = event.target

    setfullName((prevValue => {
  
      if (name === "fName") {
        return {
          fName: value ,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
          return {
            fName: prevValue.fName,
            lName: value
          }        
      }

    }))

    
  }


    return (
      
    <div>
        <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
          <input onChange={handleChange}
            name="fName"
            placeholder="First Name"
            //value={fullName.fName}
          />
          <input onChange={handleChange}
            name="lName"
            placeholder="Last Name"
            //value={fullName.lName}
            />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Forms