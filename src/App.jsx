import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<<<<<<< Updated upstream
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
=======
import "./index.css"
import './App.css'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
=======
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
