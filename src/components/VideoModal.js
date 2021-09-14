import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import EmailIcon from '@material-ui/icons/Email';


export default function VideoModal(props) {
    return (
        <VideoWrapper id={props.vidID}>
            <div className='videoContainer'>
                <video src={process.env.PUBLIC_URL +'/' + props.vidName + '.mp4'} alt={props.vidName} id={props.vidName+ '.mp4'} controls loop></video>
            </div>


            <div className='quick-access'>
                <div className='icon'>
                    <a href={props.git} target='_blank' rel='noreferrer'>
                            <GitHubIcon className='shortIcon'></GitHubIcon>
                    </a>


                    <a href={props.git} target='_blank' rel='noreferrer'>
                        <p>GITHUB</p>
                    </a>
                </div>

                <div class='icon'>
                    <a href={props.web} target='_blank' rel='noreferrer'>
                        <WebIcon></WebIcon>
                    </a>

                    <a href={props.web} target='_blank' rel='noreferrer'>
                        <p>WEBPAGE</p>
                    </a>
                </div>

                <div class='icon'>

                    <a href="mailto:bdejene19@gmail.com">
                        <EmailIcon></EmailIcon>
                    </a>
                    <a href="mailto:bdejene19@gmail.com">Email</a>

                    
                </div>
            </div>
            <div className='content'>
                <h3>{props.modalName}</h3>
                <p >{props.captionContent}</p>

            </div>
            

        </VideoWrapper>
    )
}


const VideoWrapper = styled.div`
    width: 50vw;
    margin-left: 20vw; 
    margin-top: -20%; 
    height: fit-content;
    opacity: 0;
    display: flex;
    flex-direction: column;
    z-index: 3;
    border-radius: 3%;
    background-color: white;
    position: fixed;
    box-shadow: 0 7px 7px 0 black;
    visibility: hidden;
    transition: 0.6s linear;
    /* display: none; */

    
    .videoContainer {
        width: 100%;
        height: 53vh;


        video {
            border-radius: 3% 3% 0 0;
            width: 100%;
            height: 100%;
        }
    }

    a {
        color: black;
        text-decoration: none;
        width: max-content;
        p {
            color: black;


        }

    }

   
  

    .quick-access {
        display: flex;
        width: 100%;
        background-color: #1B69DE;
        padding-top: 1em;



        .icon {
            flex: 1 1 10em;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: solid black 3px;
            border-bottom: none;
        }
        
        .icon:last-of-type {
            border-right: none;
        }

        .icon:hover {
            a, p {
                color: white;
            }

        }
    }

    .captionContent {
        height: 50%;
    }

    .content {
        margin-top:0;
        background-color: #1B69DE;
        padding: 0.75em;
        border-radius: 0 0 10px 10px;

        p {
            font-size: 1.35rem;
        }

    }  
`;
