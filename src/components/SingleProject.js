import React from 'react';
import styled from 'styled-components';



export default function SingleProject(props) {
    let newTools = props.newTools;
    let improvements = props.improvements;
    return (
        <SingleProjectContainer className='myProject'>
            <div className='project-display'>
                <img src='projectGifHolder.svg'></img>

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
        </SingleProjectContainer>
    )
}


const SingleProjectContainer = styled.article`
    padding-top: 2em;
    width: 100%;
    display: flex;

`;

const ProjectContent = styled.div`
    width: max-content;
    padding-right: 5em;
    justify-content: center;
    height: fit-content;
    /* justify-self: center; */

    p {
        font-size: 24px;
    }


    .project-display {
        /* grid-column: ${props => props.columnPosition || 1}; */
    }

    
    .list {
        font-size: 24px;
        color: white;
        padding: 1em;
        padding-bottom: 0;


        li {
            font-size: 20px;
        }
    }



`;

const ViewsBtn = styled.button`

`;