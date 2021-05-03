import React from 'react';
import styled from 'styled-components';


export default function Hero() {
    return (
        <HeroWrapper>
            <div className='intro-text'>
                <h1>Who am I</h1>
                <p>A self driven Software Engineer focusing on the JavaScript stacks like React for Front End Development. Also experienced in Python OOP data analytics. </p>
            </div>
            <img src='/herobackground.svg' alt='hero background' className='bg-photo'></img>
            <div className='quick-contact'>
                <a href='https://www.linkedin.com/in/bemnet-dejene-8663521b1/'>
                    <img src='https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png' alt='LinkedIN'/>
                </a>

                <a href='https://github.com/bdejene19'>
                    <img src='https://www.flaticon.com/svg/vstatic/svg/25/25231.svg?token=exp=1620068739~hmac=28d4e67bd5da4d0b2d4f21e3812f2031' alt='github'></img>
                </a>
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
        a {
            cursor: pointer;
            z-index: 0;

        }
        img {
            width: 8vw;
        }
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
