
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skill from './components/skills';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Skill/>
      <Project/>
      <Education/>
      <About/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
