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
                <img src={props.projectImg} alt={props.projectImg}></img>

            </div>
            <ProjectContent>
                <h3>{props.title}</h3>

                <p>
                    {props.about}
                </p>
                <ul className='list'>
                    <i>What I learned:</i>
                    {newTools.map(tool =>  <li>{tool}</li>)}
                </ul>

                <ul className='list'>
                    <i>What/How I would improve:</i>
                    {improvements.map(change => <li>{change}</li>)}
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
    height: 80vh;

    .flex-content {
        display: flex;
        height: 85%;

        .project-display {
            height: 100%;
            width: 100%;

            img {
                width: 45vw;
            }
        }
    }
   
    .btns-container {
        display: flex;
        justify-items: center;
        column-gap: 3rem;
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

`;

const ProjectContent = styled.div`
    width: max-content;
    padding-right: 5em;
    justify-content: center;
    height: fit-content;
    /* justify-self: center; */

    p {
        padding: 1em;
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



`;
