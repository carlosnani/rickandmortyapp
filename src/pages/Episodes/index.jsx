import { GlobalContext } from '../../context/globalContext';
import { useContext } from 'react';
import { Pagination } from '../../components/Pagination';
import '../../globalStyle.scss';
import './style.scss';

export function Episodes() {

  const { episodes, currentEpisodesPage, setCurrentEpisodesPage } = useContext(GlobalContext);

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
            </tr>
          </thead>
          <tbody>

            {episodes.map(({ name, air_date, episode }, index) => {
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{air_date}</td>
                  <td>{episode}</td>
                </tr>
              )
            })}

          </tbody>
        </table>
        <Pagination
          currentPage={currentEpisodesPage}
          setCurrentPage={setCurrentEpisodesPage}
          items={episodes}
        />
      </div>
    </>
  )
}
