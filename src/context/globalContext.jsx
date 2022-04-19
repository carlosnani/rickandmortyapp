import { createContext, useEffect, useState } from "react";
 

export const GlobalContext = createContext();   

export const GlobalStorage = ({children}) => { 

  const [characters , setCharacters] = useState([]);
  const [character, setCharacter] = useState(1);
  const [currentCharacter, setCurrentCharacter] = useState();
  const [currentCharacterPage, setCurrentCharacterPage ] = useState(1);
  

  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);

  console.log(currentCharacterPage);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentCharacterPage}`);
      const data = await response.json();
      setCharacters(data.results);
    }     
    fetchData(currentCharacterPage);
  }, [currentCharacterPage] );

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character/${character}`);
      const data = await response.json();
      setCurrentCharacter(data);
    } 
    fetchData();
  }, [character] );
  


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
      <GlobalContext.Provider value={{
        characters, character, setCharacter, currentCharacter, currentCharacterPage, setCurrentCharacterPage,
        episodes,
        locations
        }}>
        {children}
      </GlobalContext.Provider>
    )
  }