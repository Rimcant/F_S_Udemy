import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })
  const [noteList, setnoteList] = useState([])


  function handlechange(event) {
    // const inputValue = event.target.name
    // const newValue = event.target.value
    const {value, name} = event.target
    
    setNote((prevsValue) => {
      // if (name === "title") {
      //   return {
      //     title: value,
      //     content: prevsValue.content
      //   }
      // } else if (name === "content") {
      //     return {
      //       title: prevsValue.title,
      //       content: value
      //     }
      //   }
      return {
        ...prevsValue,
        [name] : value
      }
    } )
  }
  function additem(event) {
    setnoteList((prevsnote) => {
      return [
        ...noteList, note
      ]
     })
    event.preventDefault(); // Prevent default form submission behavior
  }
  function deleteItem(id) {
    //console.log(noteList)
    console.table(noteList)
    setnoteList(prevsNotes => {
      return prevsNotes.filter((Note, index) => {
        return index !== id;
      })
    })
    
    console.log(id)
  }
  return (
    <div>
      <Header />
      <CreateArea onChange={handlechange} onClick={additem} />
      {noteList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onClick={deleteItem}/>      
      ))}

      <Footer />
    </div>
  );
}

export default App;
