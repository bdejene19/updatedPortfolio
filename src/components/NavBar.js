import React, {useState} from 'react';
import styled from 'styled-components';

export default function NavBar() {
    const [skillsExpanded, setSkillsExpanded] = useState(false);

    const handleSkillsExpansion = () => {
        if (skillsExpanded === true) {
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
                opacity: 1;

            `;
        }

        setSkillsExpanded(!skillsExpanded);
    }
    return (
        <NavWrapper>
            <NavButton navBtnColor='#00FFF1' className='name'>Bemnet Dejene</NavButton>
            <a href='#currentProjects'>
                <NavButton className='sub-nav'>Projects</NavButton>
            </a>


            <NavButton className='sub-nav' onClick={() => handleSkillsExpansion()}>Skills</NavButton>

            <NavButton className='sub-nav' onClick={() => window.location.href = process.env.PUBLIC_URL + "/BemnetDejeneDevResume_wordType.docx"}>Resume</NavButton>
            <NavButton className='sub-nav'>Contact Info</NavButton>
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
        justify-self: center;
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