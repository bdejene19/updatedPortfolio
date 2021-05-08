import React from 'react';
import styled from 'styled-components';

// Component represents tool-tipped info to highlight areas in contact drawer => LinkedIn and Github

export default function ContactToolTip() {
    return (
        <ImmediateContactWrapper>
            <div className="tooltip">
                <span className="tooltiptext">Github</span>
                    <a href="https://github.com/bdejene19">
                        <img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png' alt='github' className='contact-icon'></img>
                    </a>
              
            </div>

            <div className="tooltip">
                <span className="tooltiptext">LinkedIn</span>
                <a href="https://www.linkedin.com/in/bemnet-dejene-8663521b1/">
                    <img src="https://cdn2.iconfinder.com/data/icons/on-point-social-media/141/LinkedIn-512.png" alt="LinkedIn" className="contact-icon" id='linkedin-icon'></img>
                </a>
     
            </div> 
        </ImmediateContactWrapper>
            
            
    )
}


const ImmediateContactWrapper = styled.div`
    display: flex;
    column-gap: 3em;
    .tooltip {
        position: relative;
        display: inline-block;
    }
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 100px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        top: 120%;
        left: 50%;
        margin-left: -60px;
    }
    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: 0px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
    }
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
    .contact-icon {
        cursor: pointer;
        width: 10vw;
        height: 15vh;

    }

    
    #linkedin-icon {
        width: 8vw;
        height: 12vh;
        margin-top: 1em;
    }


    @media screen and (max-width: 375px) {
        column-gap: 1.5em;
    }

`;