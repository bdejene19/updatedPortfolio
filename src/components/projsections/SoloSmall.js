import React from "react";
import { ProjectFlexContainer } from "../AllProjects";
import { SmallSoloProjectCard } from "../SmallSoloProjectCard";
export default function SoloSmall() {
  return (
    <ProjectFlexContainer
      id="Small-Solo-Apps-container"
      className="single-proj-type-container"
    >
      <SmallSoloProjectCard
        projBg="codeQuiz-shot.png"
        projTitle="Code Quiz"
        techUsed="HTML/CSS/JS/jQuery/Web APIs/Local Storage"
        liveLink="https://bdejene19.github.io/CodeQuiz/"
      ></SmallSoloProjectCard>
      <SmallSoloProjectCard
        projBg="wordTrivia.png"
        projTitle="Fill in the Blank Game"
        techUsed="HTML/CSS/JS/Web APIs/Local Storage"
        liveLink="https://bdejene19.github.io/WordFillGame/"
      ></SmallSoloProjectCard>
      <SmallSoloProjectCard
        projBg="plannerScreenshot.png"
        projTitle="Work Day Scheduler"
        techUsed="HTML/CSS/JS/jQuery/Moment.js/Local Storage"
        liveLink="https://bdejene19.github.io/DaysAgenda-MomentJS/"
      ></SmallSoloProjectCard>
      <SmallSoloProjectCard
        projBg="pswdGenerator.png"
        projTitle="Password Generator"
        techUsed="HTML/CSS/JS/MATH Lib."
        liveLink="https://bdejene19.github.io/RandomPasswordGenerator/"
      ></SmallSoloProjectCard>
      <SmallSoloProjectCard
        projBg="weatherDashScreenshot.png"
        projTitle="Weather Dash Board"
        techUsed="jQuery/Server-Side APIs/Local Storage/"
        liveLink="https://bdejene19.github.io/WeatherDashBoard/"
      ></SmallSoloProjectCard>
    </ProjectFlexContainer>
  );
}
