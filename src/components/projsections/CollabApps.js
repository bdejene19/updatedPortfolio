import React from "react";
import { ProjectFlexContainer } from "../AllProjects";
import SingleProject from "../SingleProject";
import { soloCollab } from "../../projects/soloCollab";
export const CollabApps = () => {
  return (
    <ProjectFlexContainer
      id="Collaborative-Apps-container"
      className="single-proj-type-container"
    >
      {soloCollab.map((project) => (
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
