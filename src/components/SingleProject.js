import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import VideoModal from "./VideoModal";
import { handleLanguageLogo } from "../utils/componentFunctions";
import WarningIcon from "@mui/icons-material/Warning";
export default function SingleProject(props) {
  let newTools = props.newTools;
  let improvements = props.improvements;
  const [openModal, setModalBool] = useState(false);
  const [modal, setModal] = useState(
    <VideoModal
      modalName={props.title}
      vidID={props.title}
      modalState={openModal}
      git={props.sourceCode}
      web={props.webpage}
      vidName={props.projectImg}
      captionContent={props.about}
    ></VideoModal>
  );

  const HerokuWarning = () => {
    return (
      <WarningWrapper>
        <WarningIcon />
        <p>Deployed with Heroku - give a moment to load.</p>
      </WarningWrapper>
    );
  };
  useEffect(() => {
    setModal(
      <VideoModal
        modalName={props.title}
        vidID={props.title}
        git={props.sourceCode}
        modalState={openModal}
        web={props.webpage}
        vidName={props.projectImg}
        captionContent={props.about}
      ></VideoModal>
    );
  }, [openModal, props]);
  return (
    <SingleProjectContainer className="myProject">
      <div className="flex-content">
        <img
          src={
            process.env.PUBLIC_URL +
            "/desktopContent/" +
            props.projectImg +
            ".png"
          }
          alt={props.projectImg}
          className="project-display"
        ></img>

        <ProjectContent className="proj-textContent">
          {props.heroku ? <HerokuWarning /> : null}
          <h3>
            <u>{props.title}</u>
          </h3>
          <div>
            <img
              src={
                process.env.PUBLIC_URL +
                "/iphoneContent/" +
                props.projectImg +
                ".svg"
              }
              alt={props.projectImg}
              id="smallScreen-display"
            ></img>
          </div>
          <p>{props.about}</p>
          <div className="tech">
            <h4>Technology Used</h4>

            <div className="logos">
              {props.techUsed?.map((tech) => {
                let languageLogo = handleLanguageLogo(tech);
                return languageLogo;
              })}
            </div>
          </div>
          <ul className="list">
            <i>What I learned:</i>
            {newTools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          <ul className="list">
            <i>What/How I would improve:</i>
            {improvements.map((change, index) => (
              <li key={index}>{change}</li>
            ))}
          </ul>
        </ProjectContent>
      </div>
      {modal}

      <div className="btns-container">
        <PlayCircleOutlineIcon
          className="openModal"
          onClick={() => setModalBool(!openModal)}
        ></PlayCircleOutlineIcon>

        <div>
          <Button
            variant="contained"
            color="primary"
            className="btn"
            target="_blank"
            href={props.sourceCode}
          >
            SOURCE
          </Button>
          <Button
            variant="contained"
            className="btn webpage"
            target="_blank"
            href={props.webpage}
          >
            WEBPAGE
          </Button>
        </div>
      </div>
    </SingleProjectContainer>
  );
}

const SingleProjectContainer = styled.article`
  z-index: 0;
  color: white;
  padding: 2em 0;

  .flex-content {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;

    .proj-textContent {
      flex: 1 1 20em;
    }

    img {
      height: 50vh;
      width: 35vw;
    }
    .proj-textContent {
      width: 50%;
      padding: 1em;
      padding-right: 3em;
    }
  }
  .btns-container {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-top: -10em;
    margin-left: 3em;
    width: 30vw;
    /* margin-left: 10em; */
    .webpage {
      background-color: orange;
      color: white;
    }

    .btn {
      font-weight: 600;
      width: 8vw;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 5em;
    }
  }

  .openModal {
    color: black;
    z-index: 0;
    background-color: white;
    border-radius: 100%;
    font-size: 2.5rem;
    margin-bottom: 0.5em;
    cursor: pointer;
    grid-column: 1/3;
    justify-self: center;

    &:hover {
      background-color: black;
      transition: 0.1s linear;
      color: white;
    }
  }

  .tech {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 1em;

    h4 {
      font-size: 1.5rem;
      padding-top: 0.25em;
      padding-bottom: 0.25em;
      margin-bottom: 1em;
      border-top: solid white 1px;
      border-bottom: solid white 1px;
    }

    .logos {
      flex: 1 1 100%;
      display: flex;
      flex-wrap: wrap;
      row-gap: 2em;
      justify-content: center;

      img {
        flex: 1 1 12vw;
        max-height: 10vh;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: fit-content;
    height: 100%;
  }

  @media screen and (max-width: 900px) {
    padding-left: 1.5em;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
    #smallScreen-display {
      /* display: block; */
    }
    .logos {
      height: 8vh;
      min-height: 8vh;
    }

    .openModal:hover {
      background-color: unset;
      color: white;
      margin-bottom: 1em;
    }

    .btns-container {
      margin-left: 0;
      padding-top: 10em;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .project-display {
      padding-left: 0;
      margin-left: 0;
      height: 30vh;
      padding: 0;
      margin: 0;
    }

    .flex-content {
      width: 100vw;

      .proj-textContent {
        padding-left: 0;
        padding-right: 2em;
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding-left: 0;
    height: fit-content;

    .flex-content {
      /* padding: 0.75em; */
      img {
        width: 90%;
        justify-self: center;
      }
    }

    .logos {
      img {
        height: 7vh;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .flex-content {
      padding: 0.25em 0.5em;
      img {
        padding-left: 1em;
      }
    }
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  #smallScreen-display {
    display: none;
  }

  p {
    padding: 0em;
    margin: 0;
    font-size: 24px;
    /* max-width: 85%; */
  }

  .list {
    font-size: 1.75rem;
    padding: 1em;
    font-weight: 600;
    width: 100%;
    li {
      font-weight: 300;
      font-size: 1.35rem;
    }
  }

  @media screen and (min-width: 2100px) {
    padding-left: 10em;
  }

  @media screen and (max-width: 450px) {
    padding-left: 0;
    margin-left: 0;
    padding-right: 1.25em;

    p {
      font-size: 22px;
    }
    .list {
      font-size: 20px;
    }
  }
`;

const WarningWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  column-gap: 1em;
  color: orange;
  > p {
    color: orange;
    font-size: 1.25rem;
  }
`;
