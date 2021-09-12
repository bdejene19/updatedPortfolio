import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import VideoModal from './VideoModal';



export default function SingleProject(props) {
    let newTools = props.newTools;
    let improvements = props.improvements;

    const openModalHL = (elementID) => {
        document.getElementById(elementID).style.filter = 'none';

        if (elementID === 'EXP|CON Concert') { 
            document.getElementById(elementID).style.cssText = `
                visibility: visible;
                margin-top: -37.5%;
                transition: 0.6s ease-in-out;
            `
        }

        if (elementID === 'Digital Marketing Landing Page') { 
            document.getElementById(elementID).style.cssText = `
                visibility: visible;
                margin-top: -37.5%;
                transition: 0.6s ease-in-out;
            `
        }


        if (elementID === 'Student Test Scores') { 
            document.getElementById(elementID).style.cssText = `
                visibility: visible;
                margin-top: -37.5%;
                transition: 0.6s ease-in-out;
            `
        }

        if (elementID === "Arsenal Fan's Soccer Page") { 
            document.getElementById(elementID).style.cssText = `
                visibility: visible;
                margin-top: -37.5%;
                transition: 0.6s ease-in-out;
            `
        }



    }
    return (
        <SingleProjectContainer className='myProject'>
            <div className='flex-content'>
                <div className='project-display'>
                    <img src={process.env.PUBLIC_URL + '/desktopContent/'+ props.projectImg + '.svg'} alt={props.projectImg}></img>
                </div>
                <ProjectContent>
                    <h3><u>{props.title}</u></h3>
                    <div id='smallScreen-display'>
                        <img src={process.env.PUBLIC_URL + '/iphoneContent/'+ props.projectImg + '.svg'} alt={props.projectImg}></img>
                    </div>
                    <p>
                        {props.about}
                    </p>
                    <ul className='list'>
                        <i>What I learned:</i>
                        {newTools.map((tool, index) =>  <li key={index}>{tool}</li>)}
                    </ul>

                    <ul className='list'>
                        <i>What/How I would improve:</i>
                        {improvements.map((change, index) => <li key={index}>{change}</li>)}
                    </ul>
                </ProjectContent>

            </div>
                <VideoModal modalName={props.title} vidID={props.title} git={props.sourceCode} web={props.webpage} vidName={props.projectImg} captionContent={props.about}></VideoModal>

            <div className='btns-container'>
                <PlayCircleOutlineIcon className='openModal' style={{zIndex: 0}} onClick={() => openModalHL(props.title)}></PlayCircleOutlineIcon>

                <Button variant='contained' color='primary' className='btn' target='_blank' href={props.sourceCode}>SOURCE</Button>
                <Button variant='contained' className='btn webpage' target='_blank' href={props.webpage}>WEBPAGE</Button>
            </div>

        </SingleProjectContainer>
    )
}


const SingleProjectContainer = styled.article`
    /* padding-top: 2em; */
    width: 100%;
    height: 70vh;
    z-index:0;
    /* padding-left: 5em; */
    overflow: none;

   
    
    .flex-content {
        display: flex;
        height: 85%;
        width: 100%;
        
        .project-display {
            height: 100%;
            width: 80vw;

            img {
                width: 40vw;
                margin-left: 5em;
            }
        }
    }
   
    .btns-container {
        display: grid;
        justify-items: center;
        column-gap: 3rem;
        grid-template-columns: 10vw 10vw;
        padding-left: 8em;
        margin-top: 1.5em;
        .webpage {
            background-color: orange;
            color: white;
        }

        .btn {
            font-weight: 600;
            width: 8vw;
        }
    }

    .openModal {
        color: black;
        background-color: white;
        border-radius: 100%;
        font-size: 2.5rem;
        margin-top: -1em;
        cursor: pointer;
        grid-column: 1/3;
        justify-self: center;

        &:hover {
            background-color: black;
            transition: 0.1s linear;
            color: white;
        }

    }
    
    @media screen and (max-width: 1024px) {
        height: fit-content;
        .btns-container {
            padding-left: 0;
        }
    }

    @media screen and (max-width: 900px) {
        padding-left: 1.5em;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
        padding-left: 0;
        
        .btns-container {
            justify-content: center;
        }
        .project-display {
            display: none;
            padding-left: 0;
            margin-left: 0;

        }

        .flex-content {
            width: 100vw;
            
        }


    }

    @media screen and (max-width: 600px) {
        padding-left: 0;
        

        .btns-container {
            padding-top: 2em;
            /* padding-left: 8em; */
            display: flex;
            column-gap: 2em;
            
            .btn {
                width: 30vw;
            }
           
        }

    }

    @media screen and (max-width: 375px) {
        height:  90vh;
        padding-left: 0;
        
        .btns-container {
            margin-top: 8.5em;
            padding-left: 0;
            margin-left: 0;
            justify-content: center;
            /* justify-content: center; */ 
        }

        .btn {
            padding-left: 1em;
            padding-right: 1em;
        }

        .flex-content {
            padding-left: 0;

            img {
                padding-left: 1em;

            }
        }
    }
`;

const ProjectContent = styled.div`
    /* margin-right: 3.5em; */
    width: 100%;
    margin-left: 5em;
    padding-right: 5em;
    justify-content: center;
    height: fit-content;
    
    #smallScreen-display {
        display: none;
    }
    

    p {
        padding: 0em;
        margin: 0;
        font-size: 24px;
        /* max-width: 85%; */
        
    }
    
    .list {
        font-size: 24px;
        color: white;
        padding: 1em;
        font-weight: 600;
        padding-bottom: 0;

        li {
            font-weight: 300;
            font-size: 20px;
        }
    }

    
    @media screen and (max-width: 768px) {
        margin-left: 0em;
        margin-right: 0.5em;

        .project-display {
            display: none;
        }

        .flex-content {
            display: grid;
            grid-template-columns: 1fr;
            width: 100vw;
            /* grid-template-rows: 1fr; */
        }

        #smallScreen-display {
            display: flex;
            height: 33vh;
            padding-top: 1em;   

            img {
                flex: 1 1 100%;   
                margin-left: -1em;             
            }

             
        }
        #largeScreen-display {
            display: none;
        }

      
        .list {
            font-size:20px;

            li {
                font-size: 20px;
            }
        }

        p {
            font-size: 28px;
        }
    }

    @media screen and (max-width: 375px){
        padding-left: 0;
        padding-right: 1.25em;

        p {
            font-size: 22px;
        }
        .list {
            font-size: 20px;
        }

       
    }




`;
