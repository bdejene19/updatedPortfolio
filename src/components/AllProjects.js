import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SingleProject from './SingleProject';
import {projects} from '../projects';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { slide } from './componentFunctions';


export default function AllProjects() {
    const [slideValue, setSlideValue] = useState(0);
    const [direction, setDirection] = useState('');

    useEffect(() => {
        slide(direction, slideValue)
    }, [slideValue, direction])
    return (
        <ProjectsWrapper id='mainProjects'>
            <h2 id='currentProjects'>Projects</h2>

            <ProjectFlexContainer>
                {projects.map(project => <SingleProject key={project.name} title={project.name} projectImg={project.projectDisplay} about={project.description} newTools={project.newSkills} improvements={project.howToImprove} sourceCode={project.sourceCode} webpage={project.liveVersion}></SingleProject>)}

            </ProjectFlexContainer>

            <br></br>
            <div className='btnsContainer'>
                <ArrowLeftIcon id='left-btn' className='slideChanger'  onClick={() => {setSlideValue(slideValue + 100); setDirection('left');}}/>
                <ArrowRightIcon id='right-btn' className='slideChanger' onClick={() => {setSlideValue(slideValue - 100); setDirection('right')}}/>
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
        padding-left: 2.5em;
    }

    @media screen and (max-width: 900px) {
        background-image: url('${process.env.PUBLIC_URL}/tabletContent/ipadmini-projectsBG.svg');
        background-position: center;
        padding-top: 6em;
    }

    @media screen and (max-width: 375px) {
        padding-top: 8em;
        padding-left: 0.75em;
        min-height: 135vh;
        .btnsContainer {
            padding-top: 0;
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

`;


