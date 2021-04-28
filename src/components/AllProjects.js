import React from 'react';
import styled from 'styled-components';
import SingleProject from './SingleProject';


export default function AllProjects() {
    return (
        <ProjectsWrapper>
            <h2>Projects</h2>
            <SingleProject title='EXP|CON' className='myProject'></SingleProject>
        </ProjectsWrapper>
    )
}


const ProjectsWrapper = styled.section`
    /* width: 100vw; */
    height: 100vh;;
    display: grid;
    padding-left: 4em;
    padding-right: 3em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    border: solid green 10px;
    /* position: absolute; */
    background-image: url('projectsBackground.svg');
    padding-top: 10em;

    h2 {
        height: fit-content;
        grid-row: 1;
        grid-column: 1/3;
    }

`;


