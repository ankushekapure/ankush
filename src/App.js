import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Bio from './components/bio/Bio';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Experience from './components/experience/Experience';

function App() {
  return (
    <Router>
      <div className='mainContainer'>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
