import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import VideoModal from './VideoModal';
import {logos} from '../codeLogos';



export default function SingleProject(props) {
    let newTools = props.newTools;
    let improvements = props.improvements;

    const [openModal, setModalBool] = useState(false);
    const [modal, setModal] = useState(<VideoModal  modalName={props.title} vidID={props.title} modalState={openModal} git={props.sourceCode} web={props.webpage} vidName={props.projectImg} captionContent={props.about}></VideoModal>);

    useEffect(() => {
        setModal(<VideoModal modalName={props.title} vidID={props.title} git={props.sourceCode} modalState={openModal} web={props.webpage} vidName={props.projectImg} captionContent={props.about}></VideoModal>)
    }, [openModal, props])
    return (
        <SingleProjectContainer className='myProject'>
            <div className='flex-content'>
                <img src={process.env.PUBLIC_URL + '/desktopContent/'+ props.projectImg + '.svg'} alt={props.projectImg} className='project-display'></img>
                <ProjectContent>
                    <h3><u>{props.title}</u></h3>
                    <div >
                        <img src={process.env.PUBLIC_URL + '/iphoneContent/'+ props.projectImg + '.svg'} alt={props.projectImg} id='smallScreen-display'></img>
                    </div>

                    <p>
                        {props.about}
                    </p>

                    <div className='tech'>
                        <h4>Technology Used</h4>

                        <div className='logos'>
                            {props.title === 'EXP|CON Concert' ? logos.map(logo => <img src={logo} alt='logo'></img>) : logos.map((logo, index) => {
                                if (index < 4) {
                                    return <img src={logo} alt='logo'></img>
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </div>

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
            {modal}
                {/* <VideoModal modalName={props.title} vidID={props.title} git={props.sourceCode} web={props.webpage} vidName={props.projectImg} captionContent={props.about}></VideoModal> */}
            
            <div className='btns-container'>
                <PlayCircleOutlineIcon className='openModal' onClick={() => setModalBool(!openModal)}></PlayCircleOutlineIcon>

                <Button variant='contained' color='primary' className='btn' target='_blank' href={props.sourceCode}>SOURCE</Button>
                <Button variant='contained' className='btn webpage' target='_blank' href={props.webpage}>WEBPAGE</Button>
            </div>

        </SingleProjectContainer>
    )
}


const SingleProjectContainer = styled.article`
    z-index: 0;
    
    .flex-content {
        display: flex;
        width: 100%;
        padding: 3em;
        align-items: center;
        justify-content: center;
        /* border: solid green 3px; */
        .project-display {
            width: 80vw;
            /* border: solid green 3px; */
            img {
                width: 40vw;
                /* margin-left: 5em; */
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
        z-index: 0;
        background-color: white;
        border-radius: 100%;
        font-size: 2.5rem;
        margin-bottom: 0.5em;
        cursor: pointer;
        grid-column: 1/3;
        justify-self: center;
    
        &:hover {
            background-color: black;
            transition: 0.1s linear;
            color: white;
        }

    }


    .tech {
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 1em;

        h4 {
            font-size: 1.5rem;
            color: white;
            padding-top: 0.25em;
            padding-bottom: 0.25em;
            margin-bottom: 1em;
            border-top: solid white 1px;
            border-bottom: solid white 1px;

        }


        .logos {
            flex: 1 1 100%;
            display: flex;
            flex-wrap: wrap;
            row-gap: 2em;
            justify-content: center;
        
            img {
                flex: 1 1 8vw;
                width: 10vw;
                height: 10vh;
                min-height: 10vh;
            }
            
        }

    }
    
   
    
    @media screen and (min-width: 1024px) {
        height: fit-content;

    }

    @media screen and (max-width: 900px) {
        padding-left: 1.5em;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
        padding-left: 0;



        h4 {
            padding-top: 10em
        }
        .logos {
            height: 8vh;
            min-height: 8vh;
            
        }

        .openModal:hover {
            background-color: unset;
            color: white;
            margin-bottom: 1em;
        }
        
        .btns-container {
            padding-left: 0;
            padding-top: 4em;
            justify-content: center;
        }
        .project-display {
            display: none;
            padding-left: 0;
            margin-left: 0;

        }

        .flex-content {
            width: 100vw;
            padding: 1.5em;
            
        }


    }

    @media screen and (max-width: 600px) {
        padding-left: 0;
        height: fit-content;
        .btns-container {
            display: grid;
            grid-template-columns: 1fr 1fr;;
            margin-top: 0em;
            padding-left: 0;
            margin-left: 0;
            justify-content: center;
            
            .btn {
                width: 30vw;
            }
           
        }

        .flex-content {
            padding: 0.75em;
        }

    }

    @media screen and (max-width: 375px) {
        height:  fit-content;
        /* padding-left: 1em; */
        
        .btns-container {
            display: grid;
            grid-template-columns: 1fr 1fr;;
            margin-top: 0em;
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
            padding: 0.25em 0.5em;;

            img {
                padding-left: 1em;

            }
        }
        
    }
`;

const ProjectContent = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 3em;
    padding-right: 10em;
    /* padding-right: 5em; */
    display: flex;
    flex-direction: column;
    
    align-items: center;
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

    @media screen and (min-width: 2100px) {
        padding-left: 10em;

    }

    @media screen and (max-width: 768px) {
        margin-left: 0em;
        /* margin-right: 0.5em; */
        padding-right:0;
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
            height: 35vh;
            width: 100%;
           
            padding-top: 1em;   

            img {
                flex: 1 1 100%;   
                margin-left: -1em; 
                height: 33vh;

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
