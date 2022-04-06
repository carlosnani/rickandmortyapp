import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';

export default function Board() {

  const data = useContext(GlobalContext);

  return (
    <div className="board">
      {data.map(({name})=>{
        return(
          <div>
             {console.log(name)}
          </div>  
        )
      })}
    </div>
  )
}
