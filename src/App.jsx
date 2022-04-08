import { GlobalStorage }  from './context/globalContext';
import { Header } from './components/Header';
import { Board } from './components/Board';
import { Footer } from './components/Footer';


import './globalStyle.scss';

function App() {

  return (
    <GlobalStorage>
    <div className="App">
      <Header />
      <Board />
    </div>
    <Footer />
    </GlobalStorage>
  )
}

export default App
