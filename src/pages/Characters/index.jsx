import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';
import "./style.scss";

export function Characters() {

  const { currentCharacter } = useContext(GlobalContext);
  const { name, status, species, image, location, gender, created, episode } = currentCharacter;

  const createdDate = new Date(created);
  const dateInfoCharacter = createdDate.toLocaleDateString('pt-br');
 
  return (
    <div className="container">
      <div className="character">
        <div className="character__image">
          <img src={image} alt={name} />
        </div>  
        <div>
        <div className="character__info">
          <div>
            <h1>{name}</h1>
            <p>Status: {status}</p>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
          </div>
          <div>                                   
            <p>Location: {location.name}</p>  
            <p>Created Date: {dateInfoCharacter}</p>
          </div>         
        </div>
        </div>
      </div>      
    </div>
  )
}
