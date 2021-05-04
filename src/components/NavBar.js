import React, {useState} from 'react';
import styled from 'styled-components';

export default function NavBar() {
    const [skillsExpanded, setSkillsExpanded] = useState(false);
    const [contactExpanded, setContactExpanded] = useState(false);
    const [aboutMeExpanded, setAboutExpanded] = useState(false);

    const handleSkillsExpansion = () => {
        if (skillsExpanded) {
            document.getElementById('skillsContentSection').style.cssText = `
                visibility: hidden;
                transform: translateY(-20%);
                transition: 0.3s ease-in-out;
                opacity: 0;
            `;
        } else {
            document.getElementById('skillsContentSection').style.cssText = `
                visibility: visible;
                transform: translateY(20%);
                transition: 0.3s ease-in-out;
                opacity: 0.95;

            `;
        }

        setSkillsExpanded(!skillsExpanded);
    }


    const handleContactExpansion = () => {
        if (contactExpanded) {
            document.getElementById('immediateContact').style.cssText = `
                visibility: hidden;
                transform: translateY(-70%);
                transition: 0.3s ease-in-out;
                opacity: 0;
            `;
        } else {
            document.getElementById('immediateContact').style.cssText = `
                visibility: visible;
                transform: translateY(70%);
                transition: 0.3s ease-in-out;
                opacity: 0.95;

            `;
        }

        setContactExpanded(!contactExpanded);
    }

    const handleAboutMeExpansion = () => {

        if (aboutMeExpanded) {
            document.getElementById('aboutMe-article').style.cssText = `
                visibility: hidden;
                width: 0;
                height: 0;
                margin-left: 0;
                transition: 0.5s ease-in-out;
                opacity: 0;
            `;

            document.getElementById('hero-section').style.filter = 'none';
        } else {
            document.getElementById('aboutMe-article').style.cssText = `
                visibility: visible;
                width: 50vw;
                height: fit-content;
                margin-left: -25vw;
                transition: 0.5s ease-in-out;
                opacity: 0.8;

            `;
            document.getElementById('hero-section').style.filter = 'blur(10px)';
        }
    
        

        setAboutExpanded(!aboutMeExpanded); 
    }
    return (
        <NavWrapper>
            <NavButton navBtnColor='#00FFF1' className='name' onClick={() => handleAboutMeExpansion()}>Bemnet Dejene</NavButton>
            <a href='#currentProjects'>
                <NavButton className='sub-nav'>Projects</NavButton>
            </a>


            <NavButton className='sub-nav' onClick={() => handleSkillsExpansion()}>Skills</NavButton>
            
            <a target='_blank' href="/BemnetDejeneDevResume_pdfType.pdf">
                <NavButton className='sub-nav' style={{marginLeft: '3em'}}>Resume</NavButton>
            </a>
            <NavButton className='sub-nav' style={{marginLeft: '3em'}} onClick={() => handleContactExpansion()}>Contact Info</NavButton>
        </NavWrapper>
    )
}


const NavWrapper = styled.nav`
    width: 100%;
    height: 8vh;
    background-color: #1B69DE;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    .name {
        grid-column: 1/3;
        padding-left: 3em;
    }

  
    .sub-nav {
        width: fit-content;
    }

`;

const NavButton = styled.button`
    width: fit-content;
    cursor: pointer;
    height: 7vh;
    border: none;
    font-size: 24px;
    color: ${props => props.navBtnColor || 'white'};
    background-color: transparent;
  
`;