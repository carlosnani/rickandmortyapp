import { createContext, useEffect, useState } from "react";
 

export const GlobalContext = createContext();   

export const GlobalStorage = ({children}) => { 

  const [characters , setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);
  

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
      setEpisodes(data.results);
    } 
    fetchData();
  }, []);
  
  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://rickandmortyapi.com/api/location");
      const data = await response.json();
      setLocations(data.results);
    } 
    fetchData();
  }, []);
  
    return (
      <GlobalContext.Provider value={{characters, episodes, locations}}>
        {children}
      </GlobalContext.Provider>
    )
  }