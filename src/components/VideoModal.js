import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import EmailIcon from "@material-ui/icons/Email";
import { Button } from "@material-ui/core";

export default function VideoModal(props) {
  const [isClosed, setModalClosed] = useState(props.modalState);
  const isMountedRef = useRef(true); // custom hook to determine if page is on initial render or not

  const isModalClosed = (elementID, videoID) => {
    if (isClosed) {
      if (window.screen.width >= 1200) {
        document.getElementById(elementID).style.cssText = `
                    margin-top: 0%;
                    transition: 0.5s ease-in-out;
                    opacity: 0;
                    display; none;
                    position: absolute;
                    left: 5%;
                `;
      }
      document.getElementById(videoID + ".mp4").pause();
    } else {
      if (window.screen.width >= 1200) {
        document.getElementById(elementID).style.cssText = `
                    visibility: visible;
                    margin-top: -60%;
                    transition: 0.5s ease-in-out;
                    opacity: 1;
                    left: 5%;

                    position: absolute;
                    display: block;
                `;
      } else {
        document.getElementById(videoID + ".mp4").style.visibility = "visible";
        document.getElementById(videoID + ".mp4").requestFullscreen();
      }
      document.getElementById(videoID + ".mp4").play();
    }
    setModalClosed(!isClosed);
  };

  useEffect(() => {
    if (isMountedRef.current === true) {
      isMountedRef.current = false;
    } else {
      isModalClosed(props.vidID, props.vidName);
    }
  }, [props.modalState]);

  return (
    <VideoWrapper id={props.vidID}>
      <div className="videoContainer">
        <video
          src={
            process.env.PUBLIC_URL + "/projectGifs/" + props.vidName + ".mp4"
          }
          alt={props.vidName}
          id={props.vidName + ".mp4"}
          type="video/mp4"
          controls
          muted
          loop
        ></video>
      </div>

      <div className="quick-access">
        <div className="icon">
          <a href={props.git} target="_blank" rel="noreferrer">
            <GitHubIcon className="shortIcon"></GitHubIcon>
          </a>

          <a href={props.git} target="_blank" rel="noreferrer">
            <p>GITHUB</p>
          </a>
        </div>

        <div className="icon">
          <a href={props.web} target="_blank" rel="noreferrer">
            <WebIcon></WebIcon>
          </a>

          <a href={props.web} target="_blank" rel="noreferrer">
            <p>WEBPAGE</p>
          </a>
        </div>

        <div className="icon">
          <a href="mailto:bdejene19@gmail.com">
            <EmailIcon></EmailIcon>
          </a>
          <a href="mailto:bdejene19@gmail.com">Email</a>
        </div>
      </div>
      <div className="content">
        <h3>{props.modalName}</h3>
        <p>{props.captionContent}</p>
        <Button
          color="primary"
          variant="contained"
          className="closeModal"
          onClick={() => isModalClosed(props.vidID, props.vidName)}
        >
          CLOSE
        </Button>
      </div>
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  width: 50vw;
  margin-left: 20vw;
  margin-top: -20%;
  height: fit-content;
  opacity: 0;
  display: flex;
  flex-direction: column;
  z-index: 3;
  border-radius: 3%;
  background-color: white;
  position: fixed;
  box-shadow: 0 7px 7px 0 black;
  visibility: hidden;
  transition: 0.6s linear;
  /* display: none; */

  .videoContainer {
    width: 100%;
    height: 53vh;

    video {
      border-radius: 3% 3% 0 0;
      width: 100%;
      height: 100%;
    }

    video::-webkit-media-controls-volume-slider {
      display: none;
    }
  }

  a {
    color: black;
    text-decoration: none;
    width: max-content;
    p {
      color: black;
    }
  }

  .quick-access {
    display: flex;
    width: 100%;
    background-color: #1b69de;
    padding-top: 1em;

    .icon {
      flex: 1 1 10em;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-right: solid black 3px;
      border-bottom: none;
    }

    .icon:last-of-type {
      border-right: none;
    }

    .icon:hover {
      a,
      p {
        color: white;
      }
    }
  }

  .captionContent {
    height: 50%;
  }

  .content {
    margin-top: 0;
    background-color: #1b69de;
    padding: 0.75em;
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.35rem;
      padding-bottom: 1em;
    }

    .closeModal {
      color: black;
    }

    .closeModal:hover {
      background-color: orange;
      color: white;
      font-weight: 900;
      transition: 0.2s ease-in-out;
    }
  }

  @media screen and (max-width: 800px) {
    width: 90vw;
    margin-left: 0%;
  }
`;
