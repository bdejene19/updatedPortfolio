import './App.css';
import AllProjects from './components/AllProjects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import {Skills} from './components/Skills';

function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
        <Skills></Skills>
        <Hero></Hero>
      </header>
      <AllProjects></AllProjects>
    </div>
  );
}

export default App;
