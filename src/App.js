import './App.css';
import AllProjects from './components/AllProjects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
        <Hero></Hero>
      </header>
      <AllProjects></AllProjects>
    </div>
  );
}

export default App;
