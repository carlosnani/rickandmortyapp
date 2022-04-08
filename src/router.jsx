import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Episodes } from "./pages/Episodes";
import { Locations } from "./pages/Locations";



export function router() {
  return (
 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
          </Routes>          
        </BrowserRouter>

  )
}
