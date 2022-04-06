import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { selectProjectTitle, slide } from "../utils/componentFunctions";
import { SoloLarge } from "./projsections/SoloLarge";
import SoloSmall from "./projsections/SoloSmall";
import { CollabApps } from "./projsections/CollabApps";

export default function AllProjects() {
  const [slideValue, setSlideValue] = useState(0);
  const [direction, setDirection] = useState("");
  const [currProjectDisplay, setProjectDisplay] =
    useState("Collaborative Apps");
  useEffect(() => {
    slide(direction, slideValue);
  }, [slideValue, direction]);

  useEffect(() => {
    let barTitles = document.getElementById("project-types").children;
    let counter = 0;
    while (counter < barTitles.length) {
      if (barTitles[counter].id === currProjectDisplay) {
        barTitles[counter].style.color = "aqua";
        barTitles[counter].style.boxShadow = "0 5px 5px 0 white";
        selectProjectTitle(counter);
        let sliderBtns = document.querySelector(".btnsContainer");
        if (currProjectDisplay === "Large Solo Apps") {
          if (sliderBtns) {
            sliderBtns.style.display = "grid";
          }
        } else {
          sliderBtns.style.display = "none";
        }
      } else {
        barTitles[counter].style.color = "white";
        barTitles[counter].style.boxShadow = "none";
      }
      counter++;
    }
    // selectProjectTitle(0)
  }, [currProjectDisplay]);

  const handleScroll = (event) => {
    const scrollingLeft = event.target.scrollLeft;
    console.log("ran scroll");
    console.log(scrollingLeft);
    console.log(slideValue);
    if (scrollingLeft) {
      setSlideValue(slideValue - 100);
    } else {
      setSlideValue(slideValue + 100);
    }
  };
  return (
    <ProjectsWrapper id="mainProjects">
      <h2 id="currentProjects">Projects</h2>
      <ProjectTypeBar id="project-types">
        <h3
          onClick={() => setProjectDisplay("Collaborative Apps")}
          id="Collaborative Apps"
        >
          Collaborative Apps
        </h3>
        <h3
          onClick={() => setProjectDisplay("Large Solo Apps")}
          id="Large Solo Apps"
        >
          Large Solo Apps
        </h3>
        <h3
          onClick={() => setProjectDisplay("Small Solo Apps")}
          id="Small Solo Apps"
        >
          Small Solo Apps
        </h3>
      </ProjectTypeBar>
      <ProjectDisplaysContainer id="all-project-types-display">
        <CollabApps></CollabApps>
        <SoloLarge></SoloLarge>
        <SoloSmall></SoloSmall>
      </ProjectDisplaysContainer>

      <br></br>
      <div className="btnsContainer">
        <ArrowLeftIcon
          id="left-btn"
          className="slideChanger"
          onClick={() => {
            setSlideValue(slideValue + 100);
            setDirection("left");
          }}
        />
        <ArrowRightIcon
          id="right-btn"
          className="slideChanger"
          onClick={() => {
            setSlideValue(slideValue - 100);
            setDirection("right");
          }}
        />
      </div>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.section`
  background-image: url(${process.env
    .PUBLIC_URL}/desktopContent/projectsBackground.svg);
  background-size: cover;
  /* height: 200vh; */
  padding-top: 15em;
  padding-left: 2em;
  padding-right: 2em;
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
    padding-top: 25em;
  }

  @media screen and (max-width: 900px) {
    background-image: url(${process.env
      .PUBLIC_URL}/tabletContent/ipadmini-projectsBG.svg);
    background-position: center;
    padding-top: 6em;
  }

  @media screen and (max-width: 800px) {
    padding-left: 1em;
    padding-top: 12.5em;
    height: 225vh;
  }
  @media screen and (max-width: 450px) {
    padding-top: 8em;
    padding-left: 0.75em;
    /* padding-left: 0.75em; */
    min-height: 135vh;
    .btnsContainer {
      padding-top: 0;
    }
  }
  @media screen and (max-width: 300px) {
    height: 250vh;
  }
`;
const ProjectTypeBar = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  row-gap: 1em;
  h3 {
    flex: 1 1 10em;
    font-size: 1.75rem;
    cursor: pointer;
    color: white;
    border-radius: 5px;
  }
`;
const ProjectDisplaysContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .single-proj-type-container {
    padding: 2em 0;
  }

  @media screen and (max-width: 650px) {
  }
`;

export const ProjectFlexContainer = styled.article`
  width: 100%;
  column-gap: 0em;
  display: flex;
  align-items: center;

  &#Large-Solo-Apps-container,
  &#Collaborative-Apps-container {
    overflow: hidden;

    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    .myProject {
      scroll-snap-align: start;
    }
  }
  &#Small-Solo-Apps-container {
    /* justify-content: center; */
    overflow-y: scroll;
    flex-wrap: wrap;
    row-gap: 1em;
    column-gap: 1.5em;
    padding: 5em;

    a {
      text-decoration: none;
      cursor: pointer;
      border-radius: 10px;
      overflow: hidden;
    }
    .smallProject:first-of-type {
      flex: 1 1 100%;
    }
    .smallProject {
      flex: 1 1 25em;
      opacity: 0.6;
      box-shadow: 0 5px 5px black;

      h4 {
        color: black;
      }
    }

    .smallProject:hover {
      opacity: 1;
      box-shadow: 0 5px 5px 5px white;
    }

    .smallProject:last-of-type {
      flex-grow: 0;
      flex-basis: 49%;
    }
  }
  .myProject {
    flex: 1 1 100%;
  }

  @media screen and (max-width: 830px) {
    &#Small-Solo-Apps-container {
      height: 150vh;
      .smallProject:last-of-type {
        flex-grow: 1;
      }
    }
  }

  @media screen and (max-width: 760px) {
    &#Small-Solo-Apps-container {
      padding: 1em 2em;
      row-gap: 3em;
    }
  }
  @media screen and (max-width: 430px) {
    &#Small-Solo-Apps-container {
      padding: 1em 0em;
      row-gap: 3em;
      height: 100vh;
    }
  }
`;
