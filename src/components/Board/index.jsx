import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/globalContext';
import { Card } from '../Card';

import './style.scss';

export function Board() {

  const { characters } = useContext(GlobalContext);

  if (characters === null) {
    return (
      <div className="noBoard">
        <h2>Sorry, but the data does not exist 😢</h2>
      </div>
    )
  } else {
    return (
      <div className="board">

        {characters.map(({ name, image, species, status, origin }, index) => {
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
}
