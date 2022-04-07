import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/globalContext';
import { Card } from '../Card';

import './style.scss';

export function Board() {

  const data = useContext(GlobalContext);
 
  
  return (
    <div className="board">

     {data.map(({name, image, species, status, origin}, index) => {
        return (
           <Card 
            key={index}
            name={name}
            image={image}
            species={species}
            status={status}            
            origin={origin.name}
            />
        )
     })}

      
    </div>
  )
}
