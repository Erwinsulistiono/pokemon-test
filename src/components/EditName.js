import React from 'react';
import Pencil from '../img/pencil.png';
import '../style/Style.css';

const EditName = (prevWindow) => {

  return (
    (prevWindow.prevWindow != '/') &&      
        <img 
        src={Pencil} 
        alt="Edit Name" 
        width="auto" 
        height="60">
        </img>
  )
}

export default EditName;