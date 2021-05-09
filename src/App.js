import './App.css';
import AllProjects from './components/AllProjects';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import ImmediateContact from './components/navdropdowns/ImmediateContact';
import NavBar from './components/NavBar';
import {Skills} from './components/navdropdowns/Skills';
import AboutMe from './components/navdropdowns/AboutMe';
import PhoneNavBar from './components/PhoneNavBar';

function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
        <Skills></Skills>
        <AboutMe></AboutMe>
        {/* Immediate Contact is what is causing overflow on smaller screen sizes */}
        <PhoneNavBar></PhoneNavBar>
        <ImmediateContact></ImmediateContact>
      </header>

      <main>
        <Hero></Hero>
        <AllProjects key='1'></AllProjects>
      </main>

      <footer>
        <ContactForm></ContactForm>
      </footer>
    </div>
  );
}

export default App;
