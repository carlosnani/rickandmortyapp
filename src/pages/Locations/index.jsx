import '../../globalStyle.scss';
import { GlobalContext } from '../../context/globalContext'; 
import { useContext } from 'react';

export function Locations() {

  const { locations } = useContext(GlobalContext);


  return (
    <div className="container">
      <div className="title">
        <h1>Locations</h1>
      </div>
      <div className="container">
        
      </div>  
    </div>
  )
}
