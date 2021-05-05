import React from 'react';
import styled from 'styled-components';

export default function AboutMe() {
    // document.getElementById('hero-section').style.filter = 'blur(10px)'

    return (
       <AboutMeWrapper id='aboutMe-article'>
           <h3>Life Outside of Work</h3>
           <p>On paper, I am currently located in London, Ontario and have a Double Major in Medical Sciences and Biology from the University of Western Ontario. Between the lines, I am an easy going person who's always smiling and love to express my creative thinking through code, piano, guitar and even freestyling rapping 🎶 (no sound cloud, haha).</p>
           <p>The reason I fell in love with code was that it enabled my creative and logistic STEM halves of myself to work in tandem to create something that meaningful and has an impact on other peoples lives.</p>
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
        font-weight: 600;
    }
`;


