import React, { useState } from "react";

function Dados() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
    
    function handleChange(event) {
        //console.log(event.target.name)
        //console.log(event.target.value)
        const { name, value } = event.target
        //console.log(name,value)
        setContact((valorqestavanocontact) => {
            //console.log(valorqestavanocontact)
            if (name === "fName") {
                return {
                    fName: value,
                    lName: valorqestavanocontact.lName,
                    email: valorqestavanocontact.email
                }
            } else if (name === "lName"){
                return {
                    fName: valorqestavanocontact.fName,
                    lName: value,
                    email: valorqestavanocontact.email
                }
            } else if (name === "email") {
                return {
                    fName: valorqestavanocontact.fName,
                    lName: valorqestavanocontact.lName,
                    email: value
                }
            }
        })
    }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
              <input onChange={handleChange}
                  name="fName"
                  placeholder="First Name"
                  value={contact.fName} 
                  
                  />
              <input onChange={handleChange}
                  name="lName"
                  placeholder="Last Name"
                  value={contact.lName} 
                  
                  />
              <input onChange={handleChange}
                  name="email"
                  placeholder="Email"
                  value={contact.email} 
                  />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Dados;
