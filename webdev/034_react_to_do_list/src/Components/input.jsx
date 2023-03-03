import React, { useState } from "react";
import List from "./list"

// Componente Input que renderiza o formulário e a lista
function Input() {
  // Estado para armazenar o valor do input
  const [task, settask] = useState("")
  // Estado para armazenar as tarefas adicionadas à lista
  const [task2, settask2] = useState([])

  // Função para atualizar o estado do input conforme o usuário digita
  function handleChange(event) {    
    // Atualiza o estado do input com o valor do evento
    settask(event.target.value)
  }

  // Função para adicionar a tarefa digitada à lista
  function handleClick() {
    // Adiciona a tarefa ao estado da lista
    settask2([...task2, task])
    // Limpa o input após adicionar a tarefa à lista
    settask("")
  }

  // Função para remover uma tarefa da lista
  function deleteItem(index) {
    // Remove a tarefa correspondente ao índice do estado da lista
    settask2(prevItems => prevItems.filter((item, i) => i !== index))
    
  }

  // Renderiza o formulário e a lista
  return (  
    <div className="form">
      {/* Input controlado para adicionar tarefas */}
      <input
        type="text"
        name="task"
        onChange={handleChange}
        value={task}
      />
      {/* Botão para adicionar tarefa */}
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
      {/* Componente List para renderizar a lista de tarefas */}
      <List onChecked={deleteItem} task2={task2} />
    </div>
  )
}

export default Input

// import React, { useState } from "react";
// import List from "./list"

// function Input() {
//   const [task, settask] = useState("")
//   const [task2, settask2] = useState([])

//   function handleChange(event) {    
//     return (
//       settask(event.target.value)
//     )  
//   }

//   function handleClick() {
//     settask2([...task2, task])
//     console.log(task2)
//     settask("")
//   }

//   function deleteItem() {
//     console.log("item called delete")
//     settask((prevItems) => {
//       console.log(index)
//     })

//   }
//   return (
      
//     <div className="form">
//       <input
//         type="text"
//         name="task"
//         onChange={handleChange}
//         value={task}
//         />
//         <button onClick={handleClick}>
//           <span value={task}>Add</span>
//       </button>
//       <List onChecked={deleteItem} task2={task2} />
//     </div>
//   )
// }

// export default Input


// import React, { useState } from "react";

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useState([]);

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

//   function addItem() {
//     setItems(prevItems => {
//       return [...prevItems, inputText];
//     });
//     setInputText("");
//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input onChange={handleChange} type="text" value={inputText} />
//         <button onClick={addItem}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {items.map(todoItem => (
//             <li>{todoItem}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
