//detail.jsx

import React from 'react';
import Contacto from '../data/infocontactos'
function Detail(props) {
      return (        
        <div className="bottom">
        <p className='info'>{props.phone}</p>
        <p className='info'>{props.email}</p>
      </div>
      );
}
export default Detail;