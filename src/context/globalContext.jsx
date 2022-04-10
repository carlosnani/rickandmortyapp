import { createContext, useEffect, useState } from "react";
 

export const GlobalContext = createContext();   

export const GlobalStorage = ({children}) => { 

  const [characters , setCharacters] = useState([]);
  const [episode, setEpisode] = useState('Daisy');
  

  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } 
    fetchData();
  }, [] );
  

  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await response.json();
      setEpisode(data.results);
    } 
    fetchData();
  }, []);

 

    return (
      <GlobalContext.Provider value={{characters, episode}}>
        {children}
      </GlobalContext.Provider>
    )
  }