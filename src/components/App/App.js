import "./App.css";
import Main from "../Main/Main.js";
import Projects from "../Projects/Projects.jsx";
import Footer from "../Footer/Footer.jsx";
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeWrapper } from "../ThemeWrapper/ThemeWrapper";

function App() {
  return (
    <BrowserRouter>
      <ThemeWrapper>
        <div className="App">
          <div className="wrap">
          <Routes>
            <Route index element={<Main />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          </div>
          <Footer />
        </div>
      </ThemeWrapper>
    </BrowserRouter>
  );
}

export default App;
