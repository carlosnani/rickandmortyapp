import './style.scss';
import { useContext} from 'react';
import { GlobalContext } from '../../context/globalContext';
import { Link } from "react-router-dom";

export function Button({id}) {

   const { character, setCharacter } = useContext(GlobalContext);

  return (
    <Link to="/character">
    <button onClick={() => {
      setCharacter(id);
    }}>
        View More
    </button>
    </Link>
  );
}
