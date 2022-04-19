import "./style.scss"

export function Pagination({ currentPage, setCurrentPage, items}) {

  const itensTotal = items.length;

  let showBtn1 = false;
  if(currentPage < 2) {
    showBtn1 = false;
  } else {
    showBtn1 = true;
  }
 
  function endPagination(){
    if(itensTotal >= 20){
     return true;
    } else {
      return false;
    }
  }
  
  return (
    <div className="container">
      <div className="pagination">
      
      { showBtn1 && 
        <button className="numberCenter"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {currentPage - 1} 
          {}
        </button>
        }

         <button className="btnDisable"> 
          {currentPage}
        </button> 
        
      { endPagination() &&
        <button className="numberCenter"
           onClick={() => setCurrentPage(currentPage + 1)}
        >
           {currentPage + 1}  
        </button>
      }

      </div>      
    </div>
  )
}
