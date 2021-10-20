import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SingleProject from './SingleProject';
import {projects} from '../projects';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';


export default function AllProjects() {
    const [slideValue, setSlideValue] = useState(0);

    const slide = (direction) => {
        let projectsArray = document.querySelectorAll('.myProject');
        if (direction === 'right') {
            if (slideValue === 0) {
                document.getElementById('left-btn').style.visibility = 'visible';

            }
            projectsArray.forEach((project) => {
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
            projectsArray.forEach((project) => {
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
    
    useEffect(() => {})
    return (
        <ProjectsWrapper id='mainProjects'>
            <h2 id='currentProjects'>Projects</h2>

            <ProjectFlexContainer>
                {projects.map(project => <SingleProject key={project.name} title={project.name} projectImg={project.projectDisplay} about={project.description} newTools={project.newSkills} improvements={project.howToImprove} sourceCode={project.sourceCode} webpage={project.liveVersion}></SingleProject>)}

            </ProjectFlexContainer>

            <br></br>
            <div className='btnsContainer'>
                <ArrowLeftIcon id='left-btn' className='slideChanger'  onClick={() => slide('left')}/>
                <ArrowRightIcon id='right-btn' className='slideChanger' onClick={() => slide('right')}/>
            </div>
            
        </ProjectsWrapper>
    )
}


const ProjectsWrapper = styled.section`
    background-image: url('${process.env.PUBLIC_URL}/desktopContent/projectsBackground.svg');
    background-size: cover;
    padding-top: 15em;
    padding-bottom: 2em;
    padding-left: 4.5em;
    z-index: 0;
    overflow: hidden;
    height: 170vh;


    h2 {
        height: fit-content;
    }

    .btnsContainer {
        display: grid;
        justify-items: center;
        grid-template-columns: auto auto;
        align-items: flex-start;
        margin-top: 2em;
        z-index: 4;
        .slideChanger {
            font-size: 100px;
            cursor: pointer;
            color: #00fff1;
            z-index: 4;
        }

        #left-btn {
            visibility: hidden;
        }
    }

    @media screen and (min-width: 2100px) {
        padding-top: 25em
    }

    @media screen and (max-width: 1200px) {
        /* padding-top: 12em; */
        height: 120vh;
        padding-left: 2.5em;
    }

    @media screen and (max-width: 900px) {
        background-image: url('${process.env.PUBLIC_URL}/tabletContent/ipadmini-projectsBG.svg');
        background-position: center;
        padding-top: 6em;
    }

    @media screen and (max-width: 768px) {
        height: 140vh;
    }

    @media screen and (max-width: 375px) {
        padding-top: 8em;
        padding-left: 0.75em;
        height: 170vh;
        

        .btnsContainer {
            padding-top: 5em;
        }
        
    }

    
`;

const ProjectFlexContainer = styled.article`
    width: 100%;
    height: fit-content;
    column-gap: 0em;
    display: flex;


    
    .myProject {
        flex: 1 1 100%;
    }

    @media screen and (max-width: 450px) {
        height: 120vh;
    }

`;


