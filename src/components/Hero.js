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
            <img src={process.env.PUBLIC_URL + '/herobackground.svg'} alt='hero background' className='bg-photo' id='desktop-bg'></img>
            <img src={process.env.PUBLIC_URL + '/resized-ipadMini-bg.svg'} alt='hero background' className='bg-photo' id='ipadmini-bg'></img>
            <img src={process.env.PUBLIC_URL + '/iphoneX-bg.svg'} alt='iphone BG background' className='bg-photo' id='iphoneX-bg'></img>

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

    #ipadmini-bg, #iphoneX-bg {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        .intro-text {
            /* padding-top: 3em; */
            padding-left: 2.25em;

            p {
                font-size: 28px;
                padding-top: 1em;
            }
        }
        .quick-contact {
            top: 20%;
            .contact-icon {
                width: minmax(4vw, 7vw);
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

            .contact-icon {
                height: 6em;
                margin-top: 0.6em;
            }
            #linkedin-icon {
                height: 5em;
            }

            
        }

        
    }


    @media screen and (max-width: 900px) {
        #desktop-bg {
            display: none;
        }

        #ipadmini-bg {
            display: block;
            /* height: 60vh; */
        }
        .intro-text {
            top: 37%;
            p {
                padding-top: 2em;
                width: 60%;
            }

           
        }

        .quick-contact {
            top: 10%;
            left: 55%;
           
        }
   
    }

    @media screen and (max-width: 768px) {
        .intro-text {
            top: minmax(30%, 42%);
            p {
                width: 55%;
            }
        }
    }

    @media screen and (max-width: 600px) {
        .intro-text {
            top: 30%;
            padding-left: 1em;
            padding-top: 1em;

            p {
                font-size: 20px;
                padding-top: 3.5em;
            }
        }
    }

    @media screen and (max-width: 375px) {
        #ipadmini-bg {
            display: none;
        }

        #iphoneX-bg {
            display: block;
        }
        
        .intro-text {
            top: 15%;

            p {
                padding-top: 1.5em;
            }
        }

        .quick-contact {
            left: 10%;
            top: 87.5%;
            column-gap: 0;

            .contact-icon, #linkedin-icon {
                width: 15vw;
            }
        }
    }
   
      
`;
