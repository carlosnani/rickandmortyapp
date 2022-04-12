import { GlobalContext } from '../../context/globalContext';
import { useContext } from 'react';
import '../../globalStyle.scss';
import './style.scss';


export function Episodes() {

  const { episodes } = useContext(GlobalContext);
 
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Episodes</h1>
        </div>
      </div>
      <div className="container">

        <table className="table-content">
          <thead>
            <tr>
              <th>Name</th>
              <th>Air Date</th>
              <th>Episode</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>

            {episodes.map(({ name, air_date, episode }, index) => {
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{air_date}</td>
                  <td>{episode}</td>
                  <td>
                    <button>
                      episode
                    </button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>

      </div>
    </>
  )
}
