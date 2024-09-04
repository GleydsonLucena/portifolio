import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
