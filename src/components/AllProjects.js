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

        // if (direction === 'right') {
        //     projectsArray.forEach(project => {
        //         project.style.cssText = `
        //             transform: translateX(${slideValue - 100}%);
        //             transition: 0.5s linear

        //         `;
        //     })
        //     setSlideValue(slideValue - 100);

        //     console.log('right btn clicked')
        // } 
        
        // if (direction === 'left') {
        //     projectsArray.forEach(project => {
        //         project.style.cssText = `
        //             transform: translateX(${slideValue + 100}%);
        //             transition: 0.5s linear

        //         `;
        //     })
        //     setSlideValue(slideValue + 100);
        //     console.log('left button clicked')
        // }
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
        <ProjectsWrapper>
            <h2 id='currentProjects'>Projects</h2>

            <ProjectFlexContainer>
                {projects.map(project => <SingleProject  title={project.name} projectImg={project.projectDisplay} about={project.description} newTools={project.newSkills} improvements={project.howToImprove} sourceCode={project.sourceCode} webpage={project.liveVersion}></SingleProject>)}

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
    width: 100vw;
    background-image: url('${process.env.PUBLIC_URL}/projectsBackground.svg');
    background-size: cover;
    padding-top: 15em;
    overflow: hidden;
    padding-bottom: 2em;

    padding-left: 4.5em;

    h2 {
        height: fit-content;
    }

    .btnsContainer {
        display: grid;
        justify-items: center;
        grid-template-columns: auto auto;
        align-items: flex-start;
        margin-top: -1em;
        z-index: 4;
        border: solid black 3px;
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


    @media screen and (max-width: 1200px) {
        padding-top: 12em;
        padding-left: 2.5em;
    }

    @media screen and (max-width: 900px) {
        background-image: url('${process.env.PUBLIC_URL}/ipadmini-projectsBG.svg');
        background-position: center;
        padding-top: 6em;

    }
    
`;

const ProjectFlexContainer = styled.article`
    width: 100%;
    display: flex;
    height: fit-content;
    /* padding-left: 3em; */
        /* padding-top: 1em; */
    .myProject {
        width: 100%;
    }

`;


