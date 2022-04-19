import { Board } from '../../components/Board';
import '../../globalStyle.scss';

import { Pagination } from '../../components/Pagination';

export function Home() {
  return (
    <div className="container">
      <Board />
      <Pagination />
    </div>
  )
}
