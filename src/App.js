import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import AllProjects from "./components/AllProjects";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import ImmediateContact from "./components/navdropdowns/ImmediateContact";
import NavBar from "./components/NavBar";
import { Skills } from "./components/navdropdowns/Skills";
import AboutMe from "./components/navdropdowns/AboutMe";
import PhoneNavBar from "./components/PhoneNavBar";
import {
  handleContactExpansion,
  handleSkillsExpansion,
  handleAboutMeExpansion,
} from "./components/componentFunctions";

export const ModalContext = createContext(null);

function App() {
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  const [contactExpanded, setContactExpanded] = useState(false);
  const [aboutMeExpanded, setAboutExpanded] = useState(false);

  useEffect(() => {
    handleContactExpansion(contactExpanded);
  }, [contactExpanded]);

  useEffect(() => {
    handleSkillsExpansion(skillsExpanded);
  }, [skillsExpanded]);

  useEffect(() => {
    handleAboutMeExpansion(aboutMeExpanded);
  }, [aboutMeExpanded]);
  return (
    <div>
      <header>
        <ModalContext.Provider
          value={{
            skillsExpanded,
            setSkillsExpanded,
            contactExpanded,
            setContactExpanded,
            aboutMeExpanded,
            setAboutExpanded,
          }}
        >
          <NavBar></NavBar>
          <Skills></Skills>
          <AboutMe></AboutMe>
          <PhoneNavBar></PhoneNavBar>
          <ImmediateContact></ImmediateContact>
        </ModalContext.Provider>
      </header>

      <main>
        {/* hero section causing overflow for some reason */}
        <Hero></Hero>
        <AllProjects key="1"></AllProjects>
      </main>

      <footer>
        <ContactForm></ContactForm>
      </footer>
    </div>
  );
}

export default App;
