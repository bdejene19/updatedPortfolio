import React from 'react';
import styled from 'styled-components';

export default function AboutMe() {
    // document.getElementById('hero-section').style.filter = 'blur(10px)'

    return (
       <AboutMeWrapper id='aboutMe-article'>
           <h3>Life Outside of Work</h3>
           <p>In order to give your all into a project, your mind and body need to be 100% focused, making a work-life balance extremely important to me. By nature, I am an easy going person who's always smiling and love to express my creative thinking through code, piano, guitar and even freestyling rapping 🎶 (no sound cloud, haha).</p>
           <p>The reason I fell in love with code was that it enabled my creative and logistic halves of myself, work in tandem to create something truly amazing.</p>
       </AboutMeWrapper>
    )
}


const AboutMeWrapper = styled.article`
    width: 0;
    height: 0;
    padding: 1em;
    position: absolute;
    left: 50%;
    margin-left: 0vw;
    background: linear-gradient(45deg, orange, slateblue 60%);
    border-radius: 20px 20px 20px 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    top: 20%;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;

    p {
        font-size: 18px;
        font-weight: 500;
    }
`;


