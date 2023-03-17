import React , {useState , useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interest from "./components/Interest";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(1200);
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      setWidth(window.innerWidth);
      setHeight(window.innerHeight)
    };

    document.addEventListener('DOMContentLoaded', handleResize);

    window.addEventListener("resize", handleResize);
    window.addEventListener('load' , handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [height , width]);
  return (
    <Router>
      <div className="main-container">
        <div className="navbar">
          <Navbar width = {width} />
        </div>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<About height={height}/>} />
            <Route exact path="/education" element={<Education height = {height} />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/Interest" element={<Interest />} />
            <Route exact path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
