import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { GlobalStorage } from './context/globalContext';

import { Routers } from './router'

import './globalStyle.scss';

function App() {

  return (

    <GlobalStorage>
      <Header />
      <Routers>
        <Menu />  
      </Routers>       
      <Footer />
    </GlobalStorage>

  )
}

export default App
