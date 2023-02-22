//avatar.jsx

import React from 'react';
import Contacto from '../data/infocontactos'
function Avatar(props) {
      return (        
          <img className="circle-img" src={props.imgURL} alt={props.name} />        
      );
}
export default Avatar;