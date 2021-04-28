import React from 'react';
import styled from 'styled-components';



export default function SingleProject(props) {
    return (
        <SingleProjectContainer>
            <img src='projectGifHolder.svg'></img>
            <ProjectContent>
                <h3>{props.title}</h3>
            </ProjectContent>
        </SingleProjectContainer>
    )
}


const SingleProjectContainer = styled.article`
    padding-left: 3em;
    padding-top: 2em;
    width: 100%;
    height: fit-content;
    display: flex;
`;

const ProjectContent = styled.div`

`;

const ViewsBtn = styled.button`

`;