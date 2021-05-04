import React from 'react';
import styled from 'styled-components';
import HeroToolTips from './HeroToolTips';


export default function Hero() {
    return (
        <HeroWrapper id='hero-section'>
            <div className='intro-text'>
                <h1>Who am I</h1>
                <p>A self driven Software Engineer focusing on the JavaScript stacks like React for Front End Development. Also experienced in Python OOP data analytics. </p>
            </div>
            <img src='/herobackground.svg' alt='hero background' className='bg-photo'></img>
            <div className='quick-contact'>
                <HeroToolTips></HeroToolTips>
            </div>            
        </HeroWrapper>
    )
}


const HeroWrapper = styled.section`
    height: fit-content;
    display: grid;
    grid-template-columns: 3fr 1fr;

    .bg-photo {
        width: 100vw;

        z-index: -1;
    }

    .quick-contact {
        position: absolute;
        left: 75%;
        top: 35%;
        align-self: center;
        display: flex;
        column-gap: 3em;
    }

    .intro-text {
        z-index: 0;
        position: absolute;
        padding-top: 5em;
        padding-left: 4.5em; 

        p {

            padding-top: 2em;
            width: 45%;
            font-size: 32px;
        }
    }


      
`;
