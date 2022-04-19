import { GlobalContext } from '../../context/globalContext';
import { useContext } from 'react';
import { Pagination } from '../../components/Pagination';
import '../../globalStyle.scss';


export function Locations() {

  const { locations, currentLocationsPage, setCurrentLocationsPage } = useContext(GlobalContext);

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
            </tr>
          </thead>
          <tbody>
            {locations.map(({ name, type, dimension }, index) => (

              <tr key={index}>
                <td>{name}</td>
                <td>{type}</td>
                <td>{dimension}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentLocationsPage}
        setCurrentPage={setCurrentLocationsPage}
        items={locations}
      />
    </div>
  )
}
