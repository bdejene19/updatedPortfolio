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
            <img src={process.env.PUBLIC_URL + '/herobackground.svg'} alt='hero background' className='bg-photo'></img>
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
        right: 3em;
        top: 40%;
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

    @media screen and (max-width: 1200px) {
        .intro-text {
            padding-top: 3em;
            padding-left: 2.25em;

            p {
                font-size: 28px;
                padding-top: 1em;
            }
        }
        .quick-contact {

            .contact-icon {
                width: 7vw
            }

            #linkedin-icon {
                height: 9vh;
                margin-top: 1.3em;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .quick-contact {
            top: 18%;

            #linkedin-icon {
                height: 5em;
                margin-top: 4em;
                /* border: solid black 3px; */
            }
        }

        
    }


    @media screen and (max-width: 900px) {
        .intro-text {
            padding-top: 2em;

            #linkedin-icon {
                height: 4em;
                width: 3vw;
                margin-top: 1.5em;
            }
        }
        
    }

   
      
`;
