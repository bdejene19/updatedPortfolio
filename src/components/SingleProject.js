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
    const [modal, setModal] = useState(<VideoModal modalName={props.title} vidID={props.title} modalState={openModal} git={props.sourceCode} web={props.webpage} vidName={props.projectImg} captionContent={props.about}></VideoModal>);

    useEffect(() => {
        setModal(<VideoModal modalName={props.title} vidID={props.title} git={props.sourceCode} modalState={openModal} web={props.webpage} vidName={props.projectImg} captionContent={props.about}></VideoModal>)
    }, [openModal])
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
    width: 100%;
    height: 100vh;
    z-index: 0;
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
        margin-top: -10em;
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
            display: flex;
            flex-wrap: wrap;
            row-gap: 2em;
            justify-content: center;
            padding-left: 0;
            margin-left: -1em;
        
            img {
                flex: 1 1 8vw;
                width: 10vw;
                height: 10vh;
            }
            
        }

    }

    @media screen and (max-width: 1024px) {
        height: 80vh;

    }

    @media screen and (max-width: 900px) {
        padding-left: 1.5em;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
        padding-left: 0;
        height: 110vh;



        h4 {
            padding-top: 10em
        }
        .logos {
            
        }

        .openModal:hover {
            background-color: unset;
            color: white;
            margin-bottom: 1em;
        }
        
        .btns-container {
            padding-left: 0;
            margin-top: 0;
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
            
        }


    }

    @media screen and (max-width: 600px) {
        padding-left: 0;
        height: 150vh;
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

    }

    @media screen and (max-width: 450px) {
        height: 120vh;
        .btns-container {
            display: grid;
            grid-template-columns: 1fr 1fr;;
            margin-top: -1em;
            padding-left: 0;
            padding-top: 0;
            margin-left: -1em;
            justify-content: center;
            /* justify-content: center; */ 
        }

        .btn {
            padding-left: 1em;
            padding-right: 1em;
        }

        .flex-content {
            padding-left: 0;
            height: 120vh;


            img {
                padding-left: 1em;

            }
        }
        
    }
`;

const ProjectContent = styled.div`
    width: 100%;
    margin-left: 5em;
    padding-right: 5em;
    justify-content: center;
    height: 97.5vh;
    
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
        height: 120vh;
        p {
            font-size: 22px;
        }
        .list {
            font-size: 20px;
        }

        .flex-content {
        }
       
    }




`;
