import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { GlobalStorage } from './context/globalContext';
import {Router} from "./router";

import './globalStyle.scss';

function App() {

  return (
   
    <GlobalStorage>
      <Router />
        <Header />
        <Menu />                     
      <Footer />
    </GlobalStorage>
     
  )
}

export default App
