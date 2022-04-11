import { GlobalContext } from '../../context/globalContext';
import { useContext } from 'react'
import { Table } from '../../components/Table';
import '../../globalStyle.scss';
import './style.scss';


export function Episodes() {

  const { episode } = useContext(GlobalContext);
 
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
            {episode.map(({ name, air_date, episode }, index) => {
              return (
                <Table
                  key={index}
                  name={name}
                  air_date={air_date}
                  episode={episode}
                />
              )                 
            })}
              
         
  
            
            {/* {episode.map(({name, air_date, episode},index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{air_date}</td>
                <td>{episode}</td>
                <th>
                    <Button>Detail</Button>  
                </th>   
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  )
}
