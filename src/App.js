import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bio from './components/Bio';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <BrowserRouter>
      <div className='mainContainer'>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Bio />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
          
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
