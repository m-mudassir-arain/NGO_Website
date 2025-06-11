
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Program from './Program';
import Donate from './Donate';
import Events from './Events';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;