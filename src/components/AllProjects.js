import React, {useState} from 'react';
import styled from 'styled-components';
import SingleProject from './SingleProject';
import {projects} from '../projects';


export default function AllProjects() {
    const [slideValue, setSlideValue] = useState(0);

    const slide = (direction) => {
        let projectsArray = document.querySelectorAll('.myProject');
        if (direction === 'right') {
            if (slideValue === 0) {
                document.getElementById('left-btn').style.visibility = 'visible';

            }
            projectsArray.forEach(project => {
                project.style.cssText = `
                    transform: translateX(${slideValue-100}%);
                    transition: 0.5s linear
                `;
            })
            if (slideValue === -200) {
                document.getElementById('right-btn').style.visibility = 'hidden';
            }
            
            setSlideValue(slideValue - 100);
        } else {
            document.getElementById('right-btn').style.visibility = 'visible';
            projectsArray.forEach(project => {
                project.style.cssText = `
                    transform: translateX(${slideValue + 100}%);
                    transition: 0.5s linear; 
                `;
            })
            if (slideValue === -100) {
                document.getElementById('left-btn').style.visibility = 'hidden';
            }
            setSlideValue(slideValue + 100);
        }
        
    
    }
    


    return (
        <ProjectsWrapper>
            <h2>Projects</h2>

            <ProjectFlexContainer id='contain'>
                {projects.map(project => <SingleProject  title={project.name} about={project.description} newTools={project.newSkills} improvements={project.howToImprove}></SingleProject>)}

            </ProjectFlexContainer>

            
            <div className='btnsContainer'>
                <button id='left-btn' onClick={() => slide('left')}>Left</button>
                <button id='right-btn' onClick={() => slide('right')}>Right</button>
            </div>
            
        </ProjectsWrapper>
    )
}


const ProjectsWrapper = styled.section`
    /* width: 100vw; */
    height: fit-content;;
   
    background-image: url('projectsBackground.svg');
    padding-top: 15em;
    padding-left: 4.5em;

    h2 {
        height: fit-content;
    }

    .btnsContainer {
        display: grid;
        justify-items: center;
        padding: 5em;

        button {
            grid-row: 1;
        }
    }
`;

const ProjectFlexContainer = styled.article`
    width: 100%;
    display: flex;
    height: 60vh;
    overflow: hidden;
    padding-left: 3em;
    .myProject {
        width: 100%;
    }

`;


