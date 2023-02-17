// Contato.js

import React from 'react';


function Contato(props) {
  return (
    <div>        
    <div className="card">
      <div className="top">
        <h2 className='name'>{props.name}</h2>
        <img className='circle-img' src={props.imgURL} alt={props.name} />
      </div>
      <div className="bottom">
        <p className='info'>{props.phone}</p>
        <p className='info'>{props.email}</p>
      </div>
    </div>
  </div>
  );
}

export default Contato;