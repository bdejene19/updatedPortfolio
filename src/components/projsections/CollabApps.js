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
          key={project.name}
          title={project.name}
          heroku={project.heroku}
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
