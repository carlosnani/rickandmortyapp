import { GlobalContext } from '../../context/globalContext'; 
import { useContext } from 'react';
import '../../globalStyle.scss';


export function Locations() {

 const { locations } = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="title">
        <h1>Locations</h1>
      </div>
      <div className="container">
          <table className="table-content">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Dimension</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {locations.map(({ name, type, dimension}, index) => (

                <tr key={index}>
                  <td>{name}</td>
                  <td>{type}</td>
                  <td>{dimension}</td>

                  <td>
                    <button>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>  
    </div>
  )
}
