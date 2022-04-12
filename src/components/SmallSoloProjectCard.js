import React from "react";
import styled from "styled-components";
export const SmallSoloProjectCard = (props) => {
  return (
    <a
      href={props.liveLink}
      target="_blank"
      rel="noreferrer"
      className="smallProject"
    >
      <DisplayContainer bgPhoto={props.projBg}>
        <div>
          <h4>{props.projTitle}</h4>
          <p>{props.techUsed}</p>
        </div>
      </DisplayContainer>
    </a>
  );
};

const DisplayContainer = styled.div`
  background-image: ${(props) =>
    `url('${process.env.PUBLIC_URL}/smallProjImgs/${props.bgPhoto}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 60vh;
  z-index: 0;
  display: flex;
  align-items: center;
  div {
    width: fit-content;
    font-size: 1.5rem;
    padding: 0.5em;
    top: 3%;
    z-index: 2;
    background-color: #1b69de;
    display: flex;
    flex-direction: column;
  }
`;
