import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SingleProject from './SingleProject';
import {projects} from '../projects';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { selectProjectTitle, slide } from './componentFunctions';
import { SmallSoloProjectCard } from './SmallSoloProjectCard';


export default function AllProjects() {
    const [slideValue, setSlideValue] = useState(0);
    const [direction, setDirection] = useState('');
    const [currProjectDisplay, setProjectDisplay] = useState('Collaborative Apps');
    useEffect(() => {
        slide(direction, slideValue)
    }, [slideValue, direction])

    useEffect(() => {
        let barTitles = document.getElementById('project-types').children;
        let counter = 0;
        while (counter < barTitles.length) {
            if (barTitles[counter].id === currProjectDisplay) {
                barTitles[counter].style.color = 'aqua';
                barTitles[counter].style.borderBottom = 'solid orange 3px';
                selectProjectTitle(counter);

            } else {
                barTitles[counter].style.color = 'white';
                barTitles[counter].style.borderBottom = 'none';
            }
            counter++;
        }
        // selectProjectTitle(0)
    }, [currProjectDisplay])
    return (
        <ProjectsWrapper id='mainProjects'>
            <h2 id='currentProjects'>Projects</h2>
            <ProjectTypeBar id='project-types'>
                <h3 onClick={() => setProjectDisplay('Collaborative Apps')} id='Collaborative Apps'>Collaborative Apps</h3>
                <h3 onClick={() => setProjectDisplay('Large Solo Apps')} id='Large Solo Apps'>Large Solo Apps</h3>
                <h3 onClick={() => setProjectDisplay('Small Solo Apps')} id='Small Solo Apps'>Small Solo Apps</h3>
            </ProjectTypeBar>
            <ProjectDisplaysContainer id='all-project-types-display'>
                <ProjectFlexContainer id='Collaborative-Apps-container' className='single-proj-type-container'>
                </ProjectFlexContainer>
                <ProjectFlexContainer id='Large-Solo-Apps-container' className='single-proj-type-container'>
                    {projects.map(project => <SingleProject  title={project.name} projectImg={project.projectDisplay} about={project.description} newTools={project.newSkills} improvements={project.howToImprove} sourceCode={project.sourceCode} webpage={project.liveVersion}></SingleProject>)}
                </ProjectFlexContainer> 
                <ProjectFlexContainer id='Small-Solo-Apps-container' className='single-proj-type-container'> 
                    {/* <h1>hello</h1> */}
                    <SmallSoloProjectCard projBg='plannerScreenshot.png' projTitle='Work Day Scheduler' techUsed='HTML/CSS/JS/jQuery/Moment.js/Local Storage'></SmallSoloProjectCard>
                    <SmallSoloProjectCard projBg='pswdGenerator.png' projTitle='Password Generator' techUsed='HTML/CSS/JS/MATH Lib.'></SmallSoloProjectCard>
                    <SmallSoloProjectCard projBg='weatherDashScreenshot.png' projTitle='Weather Dash Board' techUsed='jQuery/APIs/Local Storage/'></SmallSoloProjectCard>

                    {/* {projects.map(project => <SingleProject key={project.name} title={project.name} projectImg={project.projectDisplay} about={project.description} newTools={project.newSkills} improvements={project.howToImprove} sourceCode={project.sourceCode} webpage={project.liveVersion}></SingleProject>)} */}
                </ProjectFlexContainer>
            </ProjectDisplaysContainer>
            

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
    /* padding-bottom: 2em;
    padding-left: 4.5em;
    z-index: 0;
    overflow: hidden; */


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
        /* padding-left: 2.5em; */
    }

    @media screen and (max-width: 900px) {
        background-image: url('${process.env.PUBLIC_URL}/tabletContent/ipadmini-projectsBG.svg');
        background-position: center;
        padding-top: 6em;
    }

    @media screen and (max-width: 375px) {
        padding-top: 8em;
        /* padding-left: 0.75em; */
        min-height: 135vh;
        .btnsContainer {
            padding-top: 0;
        }   
    }
`;
const ProjectTypeBar = styled.article`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;


    h3 {
        flex: 1 1 5em;
        font-size: 1.75rem;
        cursor: pointer;
    }
    h3 {
        /* text-decoration: underline solid orange; */
    }
`
const ProjectDisplaysContainer =styled.article`
    width: 100%;
    border: solid black 3px;
    display: flex;
    align-items: center;
    justify-content: center;


    .single-proj-type-container {

    }
`;


const ProjectFlexContainer = styled.article`
    width: 100%;
    column-gap: 0em;
    display: flex;
    /* justify-content: center; */
    align-items: center;


    &#Small-Solo-Apps-container {
        justify-content: center;
        flex-wrap: wrap;
        border: solid blue 3px;
        row-gap: 1em;
        column-gap: 1.5em;
        padding: 5em;
        .smallProject:first-of-type {
            flex: 1 1 100%;
        }
        .smallProject {
            flex: 1 1 40%;
        }
    }  
    .myProject {
        flex: 1 1 100%;
    }

`;


