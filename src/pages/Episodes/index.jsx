import { GlobalContext } from '../../context/globalContext';
import { useContext } from 'react'
import '../../globalStyle.scss';
import './style.scss';



export function Episodes() {

  const { episode } = useContext(GlobalContext);
  console.log(episode);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Episodes</h1>
        </div>
      </div>
      <div className="container">
        <table className="table-content">
          <thead className>
            <tr>
              <th>Name</th>
              <th>Air Date</th>
              <th>Episode</th>   
              <th></th>           
            </tr>
          </thead>
          <tbody>
            {episode.map(({name, air_date, episode},index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{air_date}</td>
                <td>{episode}</td>
                <th>
                    <button className="btn-detail">Detail</button>  
                </th>   
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
