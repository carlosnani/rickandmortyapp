import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Header } from './components/Header';

import { Footer } from './components/Footer';
import { Menu } from './components/Menu';

import { GlobalStorage } from './context/globalContext';

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Episodes } from "./pages/Episodes";
import { Locations } from "./pages/Locations";

import './globalStyle.scss';

function App() {

  return (
    <BrowserRouter>
    <GlobalStorage>

      <div className="App">
        <Header />
        <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
          </Routes>  
        
      </div>
      <Footer />

    </GlobalStorage>
    </BrowserRouter>
  )
}

export default App
