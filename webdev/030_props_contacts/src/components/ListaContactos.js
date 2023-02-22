// ListaContactos.js

import React from 'react';
import CartaoContacto from './cartaocontacto';
import contactos from '../data/infocontactos'
import Avatar from './Avatar';

function ListaContatos(props) {
  return (
    <div>
      <h1 className="heading">Contactos</h1>
      <Avatar imgURL="https://resources.premierleague.com/premierleague/photos/players/250x250/p116594.png" />
    {contactos.map((contacto) => (
      <CartaoContacto
        key={contacto.name}
        name={contacto.name}
        imgURL={contacto.imgURL}
        phone={contacto.phone}
        email={contacto.email}
      />
    ))}
  </div>
  );
}

export default ListaContatos;
