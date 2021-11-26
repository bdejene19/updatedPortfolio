import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { downloadResume, handleAboutMeExpansion, handleContactExpansion, handleSkillsExpansion } from './componentFunctions';

export default function NavBar() {
    const [skillsExpanded, setSkillsExpanded] = useState(false);
    const [contactExpanded, setContactExpanded] = useState(false);
    const [aboutMeExpanded, setAboutExpanded] = useState(false);

    // const handleSkillsExpansion = () => {
    //     if (skillsExpanded) {
    //         document.getElementById('skillsContentSection').style.cssText = `
    //             visibility: hidden;
    //             transform: translateY(-20%);
    //             transition: 0.3s ease-in-out;
    //             opacity: 0;
    //             z-index: -1;
    //         `;
    //     } else {
    //         if (aboutMeExpanded) {
    //             handleAboutMeExpansion();
    //         }
    //         document.getElementById('skillsContentSection').style.cssText = `
    //             visibility: visible;
    //             transform: translateY(15%);
    //             transition: 0.3s ease-in-out;
    //             opacity: 0.95;
    //             z-index: 4;

    //         `;
    //     }

    //     setSkillsExpanded(!skillsExpanded);
    // }


    // const handleContactExpansion = () => {
    //     if (contactExpanded) {
    //         document.getElementById('immediateContact').style.cssText = `
    //             visibility: hidden;
    //             transform: translateY(-70%);
    //             transition: 0.3s ease-in-out;
    //             opacity: 0;
    //             z-index: -1;
    //         `;
    //     } else {
    //         document.getElementById('immediateContact').style.cssText = `
    //             visibility: visible;
    //             transform: translateY(70%);
    //             transition: 0.3s ease-in-out;
    //             opacity: 0.95;
    //             z-index: 4;

    //         `;
    //     }

    //     setContactExpanded(!contactExpanded);
    // }

    // const handleAboutMeExpansion = () => {
    //     if (aboutMeExpanded) {
    //         document.getElementById('aboutMe-article').style.cssText = `
    //             visibility: hidden;
    //             width: 0;
    //             height: 0;
    //             margin-left: 0;
    //             transition: 0.5s ease-in-out;
    //             opacity: 0;
    //             z-index: -1;
    //         `;

    //         document.getElementById('hero-section').style.filter = 'none';
    //     } else {
    //         if (skillsExpanded) {
    //             handleSkillsExpansion();
    //         }

    //         if (contactExpanded) {
    //             handleContactExpansion();
    //         }
            
    //         document.getElementById('aboutMe-article').style.cssText = `
    //             visibility: visible;
    //             width: 80vw;
    //             height: fit-content;
    //             margin-left: -40vw;
    //             transition: 0.3s ease-in-out;
    //             opacity: 0.8;
    //             z-index: 4;

    //         `;
    //         document.getElementById('hero-section').style.cssText = `
    //             filter: blur(10px);
    //             -webkit-filter: blur(10px);
    //             transition: 0.3s ease-in-out;            
    //         `;
            
    //     }
    //     setAboutExpanded(!aboutMeExpanded); 
        
        
    // }

    // const downloadResume = () => {
    //     window.location.href =  process.env.PUBLIC_URL + '/BemnetDejeneDevResume_wordType.docx';
    // }

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