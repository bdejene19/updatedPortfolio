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
            <img src={process.env.PUBLIC_URL + '/desktopContent/herobackground.svg'} alt='hero background' className='bg-photo' id='desktop-bg'></img>
            <img src={process.env.PUBLIC_URL + '/tabletContent/resized-ipadMini-bg.svg'} alt='hero background' className='bg-photo' id='ipadmini-bg'></img>
            <img src={process.env.PUBLIC_URL + '/iphoneContent/iphoneX-bg.svg'} alt='iphone BG background' className='bg-photo' id='iphoneX-bg'></img>

            <div className='quick-contact'>

                <HeroToolTips></HeroToolTips>
            </div>            
        </HeroWrapper>
    )
}


const HeroWrapper = styled.section`
    height: 87vh;
    display: grid;
    grid-template-columns: 3fr 1fr;
    overflow: hidden;
    background-image: url('${process.env.PUBLIC_URL}/desktopContent/herobackground.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .bg-photo {
        width: 100vw;
        /* min-height: 100vh; */
        z-index: -1;
    }

    .quick-contact {
        position: absolute;
        margin-left: 75%;
        align-self: center;
        display: flex;
    }

    .intro-text {
        z-index: 0;
        position: absolute;
        margin-top: 4em;
        padding-left: 4.5em; 

        p {

            padding-top: 2em;
            width: 45%;
            font-size: 32px;
        }
    }

    #desktop-bg, #ipadmini-bg, #iphoneX-bg {
        display: none;
    }

    /* for xl screens */
    @media screen and (min-width: 2000px) {
        .intro-text {
            h1 {
                font-size: 98px;
            }
            p {
                font-size: 3rem;
            }
        }
    }

    /* specific edge case for ipad pro tablets */
    @media screen and (max-width: 1024px) and (min-height: 1200px) {
        height: 40vh;   
        #desktop-bg {
            display: block;
        }

        .quick-contact {
            .contact-icon {
                height: 10vh;
            }

            #linkedin-icon {
                height: 8.5vh;
            }
        }
        
        background-image: none;
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
            margin-top: -10em;
            .contact-icon {
                width: minmax(4vw, 7vw);
            }
        }
    }

   
    @media screen and (max-width: 900px) {
        height: fit-content;
        background-image: none;
        .quick-contact{
            top: 0;
        }
        /* #desktop-bg {
            display: none;
        } */

        #ipadmini-bg {
            display: block;
            /* height: 60vh; */
        }
        .intro-text {
            margin-top: 30em;
            p {
                padding-top: 2em;
                width: 55%;
            }

           
        }

        .quick-contact {
            margin-top: 20%;
            margin-left: 55.5%;

            #linkedin-icon {
                margin-top: 0.5em;
            }
           
        }
   
    }

    @media screen and (max-width: 768px) {
        .intro-text {
            margin-top: 50%;
            padding-left: 1em;
            

            p {
                width: 55%;
                padding-top: 2em;
            }
        }

        .quick-contact {
            /*  */
            top: 0;
        }
    }

    @media screen and (max-width: 600px) {
        .intro-text {
            margin-top: 40%;
            padding-left: 1em;

            h1 {
                font-size: 2.5rem;
            }

            p {
                font-size: 20px;
                min-width: 40%;
                max-width: 55%;
                padding-top: 4em;
            }
        }

        .quick-contact {
            margin-top: 12.5%;
            margin-left: 50%;

            .contact-icon {
                width: 15vw;
                margin: 0;  
            }

            #linkedin-icon {
                width: 12vw;
                margin-top: 0.56em;
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
            margin-top: 15%;

            p {
                padding-top: 1.5em;
            }
        }

        .quick-contact {
            margin-left: 10%;
            left:0;
            top: 80%;
            column-gap: 0;

            .contact-icon {
                height: 10vh;
            }
            #linkedin-icon {
                margin-top: 0.4em;
                height: 8.5vh;
            }
        }
    }
   
      
`;
