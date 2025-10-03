import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"; //hooks

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import HelloWorld from "./components/HelloWorld";

function App() {
  
      const [contador, setContador] = useState();

      useEffect(() => {
        setContador(new Date().toDateString());
      },  [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    <HelloWorld />
    <h1>contador:
      {contador}
    </h1>
    </div>
  )
}

export default App; 