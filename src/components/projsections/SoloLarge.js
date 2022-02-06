import React from 'react';
import {projects} from '../../projects';
import { ProjectFlexContainer } from '../AllProjects';
import SingleProject from '../SingleProject';

export const SoloLarge = () => {
  return (
    <ProjectFlexContainer id='Large-Solo-Apps-container' className='single-proj-type-container'>
        {projects.map(project => <SingleProject  title={project.name} projectImg={project.projectDisplay} about={project.description} newTools={project.newSkills} improvements={project.howToImprove} sourceCode={project.sourceCode} webpage={project.liveVersion}></SingleProject>)}
    </ProjectFlexContainer> 
  )
}
