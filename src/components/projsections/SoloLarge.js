import React from "react";
import { soloLarge } from "../../projects/soloLarge";
import { ProjectFlexContainer } from "../AllProjects";
import SingleProject from "../SingleProject";

export const SoloLarge = (props) => {
  return (
    <ProjectFlexContainer
      id="Large-Solo-Apps-container"
      className="single-proj-type-container"
      onScroll={props.scrollHandle}
    >
      {soloLarge.map((project) => (
        <SingleProject
          title={project.name}
          projectImg={project.projectDisplay}
          about={project.description}
          techUsed={project.technologies}
          newTools={project.newSkills}
          improvements={project.howToImprove}
          sourceCode={project.sourceCode}
          webpage={project.liveVersion}
        ></SingleProject>
      ))}
    </ProjectFlexContainer>
  );
};
