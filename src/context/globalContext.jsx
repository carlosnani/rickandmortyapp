import { createContext, useEffect, useState } from "react";
 

export const GlobalContext = createContext();   


 export const GlobalStorage = ({children}) => { 

  const [data , setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);


    return (
      <GlobalContext.Provider value={data}>
        {children}
      </GlobalContext.Provider>
    )
  }