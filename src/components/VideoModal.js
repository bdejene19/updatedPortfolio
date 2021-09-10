import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

export default function VideoModal(props) {
    return (
        <VideoWrapper>
            <div>
                <video src="" alt=""></video>
                <p>{props.modalName}</p>
            </div>

            <hr></hr>

            <div className='quick-access'>
                <div class='icon'>
                    <a href={props.git} target='_blank' rel='noreferrer'>
                        <div>
                            <GitHubIcon></GitHubIcon>
                            <p>GITHUB</p>
                        </div>
                 
                    </a>
                </div>

                <div class='icon'>
                    <a href={props.web}>
                        <div>
                            <WebIcon></WebIcon>
                            <p>WEBPAGE</p>
                        
                        </div>                        
                        </a>
                </div>

            </div>

        </VideoWrapper>
    )
}


const VideoWrapper = styled.div`
    width: 50%;
    margin-left: 25%;  
    height: 80vw;
    display: flex;
    flex-direction: column;

    a {
        color: black;
        text-decoration: none;

        p {}
    }


    .HLgif {
        width: 100%;
        height: 30%;

    }

    .quick-access {
        display: flex;
        background-color: snow;

        .icon {
            flex: 1 1 10em;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;
