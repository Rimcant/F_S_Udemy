// cartaocontacto.js

import React from 'react';
import Avatar from './Avatar'
import Detail from './detail'


function Contato(props) {
  return (
    <div>        
    <div className="card">
      <div className="top">
        <h2 className='name'>{props.name}</h2>
        <Avatar name={props.name} imgURL={props.imgURL} />
        </div>
        <Detail phone={props.phone} email={props.email}  />
    </div>
  </div>
  );
}

export default Contato;