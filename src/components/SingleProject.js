import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';



export default function SingleProject(props) {
    let newTools = props.newTools;
    let improvements = props.improvements;
    return (
        <SingleProjectContainer className='myProject'>
            <div className='flex-content'>
                <div className='project-display'>
                    <img src={process.env.PUBLIC_URL + '/desktopContent/'+ props.projectImg + '.svg'} alt={props.projectImg}></img>


                </div>
                <ProjectContent>
                    <h3><u>{props.title}</u></h3>
                    <div className='project-display' id='smallScreen-display'>
                        {/* <img src={process.env.PUBLIC_URL + '/'+ props.projectImg} alt={props.projectImg}></img> */}
                        <img src={process.env.PUBLIC_URL + '/iphoneContent/'+ props.projectImg + '-iphoneX.svg'} alt={props.projectImg}></img>


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
            <div className='btns-container'>
                <Button variant='contained' color='primary' className='btn' target='_blank' href={props.sourceCode}>SOURCE</Button>
                <Button variant='contained' className='btn webpage' target='_blank' href={props.webpage}>WEBPAGE</Button>
            </div>
        </SingleProjectContainer>
    )
}


const SingleProjectContainer = styled.article`
    padding-top: 2em;
    width: 100%;
    height: 70vh;
    padding-left: 5em;

    
    .flex-content {
        display: flex;
        height: 85%;
        .project-display {
            height: 100%;
            width: 100%;

            img {
                width: 100%;
            }
        }
    }
   
    .btns-container {
        display: grid;
        justify-items: center;
        column-gap: 3rem;
        grid-template-columns: 10vw 10vw;
        padding-left: 5rem;
        .webpage {
            background-color: orange;
            color: white;
        }

        .btn {
            font-weight: 600;
            width: 8vw;
        }
    }

    @media screen and (max-width: 1024px) {
        height: fit-content;
    }

    @media screen and (max-width: 900px) {
        padding-left: 1.5em;
    }

    @media screen and (max-width: 600px) {
        .project-display {
            display: none;
        }

        .btns-container {
            padding-top: 2em;
            /* padding-left: 8em; */
            display: flex;
            
            .btn {
                width: 30vw;
            }
           
        }

    }

    @media screen and (max-width: 375px) {
        
        height:  90vh;
        padding-left: 0;
         


        .btns-container {
            padding-top: 3em;
            padding-left: 0;
            justify-content: center;
            column-gap: 3em;
            /* justify-content: center; */ 
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
    width: max-content;
    margin-right: 2em;
    justify-content: center;
    height: fit-content;
    padding-left: 2em;
    #smallScreen-display {
            display: none;
    }
    

    p {
        padding: 0em;
        margin: 0;
        font-size: 24px;
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

    @media screen and (max-width: 600px) {
        .flex-content {
            display: grid;
            grid-template-columns: 1fr;
            width: 100vw;
            /* grid-template-rows: 1fr; */
        }

        #smallScreen-display {
            display: block;
            height: 33vh;
            padding-top: 1em;            
        }
        #largeScreen-display {
            display: none;
        }

        .list {
            font-size:20px;

            li {
                font-size: 16px;
            }
        }

        p {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 375px){
        padding-left: 0;
        .list {
            font-size: 18px;
        }

       
    }




`;
