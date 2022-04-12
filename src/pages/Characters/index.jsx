import React from 'react'; 
import { useContext} from 'react';
import { GlobalContext } from '../../context/globalContext';

export function Characters() {

  const { currentCharacter } = useContext(GlobalContext);
  const { name, species } = currentCharacter;

  return (
    <div className="container">
        <div className="title">
            <h1>{name}</h1>
            <p>{species}</p>
        </div>          
    </div>
    
  )
}
