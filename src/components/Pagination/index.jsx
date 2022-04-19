import { useContext} from 'react';
import { GlobalContext } from '../../context/globalContext';
import { HiArrowRight }  from "react-icons/Hi"
import { HiArrowLeft }  from "react-icons/Hi"


import "./style.scss"

export function Pagination() {

  const { currentCharacterPage, setCurrentCharacterPage } = useContext(GlobalContext);

  let showBtn1 = false;
  if(currentCharacterPage < 2) {
    showBtn1 = false;
  } else {
    showBtn1 = true;
  }

  let showBtn2 = false;
  if(currentCharacterPage >= 42) {
    showBtn2 = false;
  } else {
    showBtn2 = true;
  }

  return (
    <div className="container">

      <div className="pagination">
      
      { showBtn1 && 
        <button className="numberCenter"
          onClick={() => setCurrentCharacterPage(currentCharacterPage - 1)}
        >
          {currentCharacterPage - 1} 
          {}
        </button>
        }

         <button className="btnDisable"> 
          {currentCharacterPage}
        </button> 
        
      { showBtn2  && 
        <button className="numberCenter"
           onClick={() => setCurrentCharacterPage(currentCharacterPage + 1)}
        >
           {currentCharacterPage + 1}  
        </button>

      }
      </div>      
    </div>
  )
}
