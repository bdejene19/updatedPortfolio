import React from 'react';
import styled from 'styled-components';
export const SmallSoloProjectCard = (props) => {
  return (
    <DisplayContainer className='smallProject' bgPhoto={props.projBg}>
      <div>
        <h4>{props.projTitle} cjecjking</h4>
        <p>{props.techUsed}</p>
      </div>
    </DisplayContainer>
  );
}

const DisplayContainer = styled.div`
    background-image: ${props => `url('${process.env.PUBLIC_URL}/smallProjImgs/${props.bgPhoto}')`};
    background-position: flex-start;
    background-size: cover;
    background-repeat: no-repeat;
    height: 60vh;
    z-index: 0;
    display: flex;
    align-items: center;
    border-radius: 10px;
    div {
      width: fit-content;
      font-size: 1.5rem;
      padding: 0.5em;
      top: 3%;
      z-index: 2;
      background-color: #1B69DE;
      display: flex;
      flex-direction: column;
    }
`;