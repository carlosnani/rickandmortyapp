import { GlobalStorage }  from './context/globalContext';
import { Header } from './components/Header';

import './globalStyle.scss';

function App() {

  return (
    <GlobalStorage>
    <div className="App">
      <Header />
    </div>
    </GlobalStorage>
  )
}

export default App
