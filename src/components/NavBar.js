import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { downloadResume, handleAboutMeExpansion, handleContactExpansion, handleSkillsExpansion } from './componentFunctions';

export default function NavBar() {
    const [skillsExpanded, setSkillsExpanded] = useState(false);
    const [contactExpanded, setContactExpanded] = useState(false);
    const [aboutMeExpanded, setAboutExpanded] = useState(false);

    useEffect(() => {
        handleContactExpansion(contactExpanded);
    }, [contactExpanded])

    useEffect(() => {
        handleSkillsExpansion(skillsExpanded);
    }, [skillsExpanded])

    useEffect(() => {
        handleAboutMeExpansion(aboutMeExpanded)
    }, [aboutMeExpanded])

    
    return (
        <NavWrapper>
            <NavButton navBtnColor='#00FFF1' className='name' id='nav-aboutMe' onClick={() => {
                setAboutExpanded(!aboutMeExpanded);
                setSkillsExpanded(false);
                setContactExpanded(false);
            }}>Bemnet Dejene</NavButton>
            <a href='#currentProjects'>
                <NavButton className='sub-nav' id='nav-project'>Projects</NavButton>
            </a>


            <NavButton className='sub-nav' id='nav-skills' onClick={() => {
                setSkillsExpanded(!skillsExpanded);
                setAboutExpanded(false);
            }}>Skills</NavButton>
            <NavButton className='sub-nav' onClick={downloadResume} id='nav-resume' >Resume</NavButton>
            <NavButton className='sub-nav' id='nav-contactNow' onClick={() => setContactExpanded(!contactExpanded)}>Contact Info</NavButton>
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
    a {
        width: max-content;
    }
    .name {
        grid-column: 1/3;
        padding-left: 3em;
    }

    #nav-resume {
        transform: translateX(-5vw);
    }
    #nav-contactNow {
        justify-self: center;
    }

    #nav-resume {
        justify-self: right;
    }

    @media screen and (max-width: 1200px) {
        width: 100%;

        #nav-resume, #nav-contactNow {
            text-align: center;
            justify-self: normal;
        }

        .name {

            padding-left: 1.5em;
        }
    }

    @media screen and (max-width: 600px) {
       display: none;
    }
`;

const NavButton = styled.button`
    width: max-content;
    cursor: pointer;
    height: 7vh;
    border: none;
    font-size: 24px;
    color: ${props => props.navBtnColor || 'white'};
    background-color: transparent;

    @media screen and (max-width: 900px) {
        height: 5vh;
        width: fit-content;
        font-size: 18px;
    }

    @media screen and (max-width: 600px) {
        display: none;

        
    }
  
`;