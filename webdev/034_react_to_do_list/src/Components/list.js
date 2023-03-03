import React, { useState } from "react";

// Componente List que renderiza a lista de tarefas
function List(props) {
  // Estado para controlar a estilização da tarefa
  const [sublinhado, setsublinhado] = useState(false)

  // Função para alternar o estado do sublinhado
  function handleClick() {
    // Alterna o estado do sublinhado
    setsublinhado(!sublinhado)
  }

  // Renderiza a lista de tarefas com a estilização e o controle de evento de clique
  return (
    <div>
      <ul>
        {props.task2.map((item, index) => (
          <li
            // Estilização da tarefa com base no estado do sublinhado
            style={{ textDecoration: sublinhado ? 'line-through': 'none' }}
            // Valor do sublinhado
            value={sublinhado}     
            // Evento de clique para remover a tarefa da lista
            onClick={() => props.onChecked(index)}
            // Identificador da tarefa para facilitar a remoção
            id={index}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;


// import React, {useState} from "react";

// function List(props) {

//   const [sublinhado, setsublinhado] = useState(false)
 

//   function handleClick() {
//     setsublinhado(!sublinhado)
//     console.log(sublinhado)

//   }

//   return (
//     <div>
//       <ul>
//         {props.task2.map((item, index) => (
//           <li
//             style={{ textDecoration: sublinhado ? 'line-through': 'none' }}
//             value={sublinhado}     
//             onClick={()=>{ props.onChecked(index)}}
//             id={index}
//             key={index}>{item}
            
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default List;