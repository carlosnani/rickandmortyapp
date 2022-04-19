import { Board } from '../../components/Board';
import { Pagination } from '../../components/Pagination';

import { useContext} from 'react';
import { GlobalContext } from '../../context/globalContext';

import '../../globalStyle.scss';


export function Home() {

  const { characters, currentCharacterPage, setCurrentCharacterPage } = useContext(GlobalContext);

  return (
    <div className="container">
      <Board />
      <Pagination
        currentPage={currentCharacterPage}
        setCurrentPage={setCurrentCharacterPage}
        items={characters}
      />
    </div>
  )
}
