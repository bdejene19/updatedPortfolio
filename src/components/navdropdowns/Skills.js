import React, {useState} from 'react';
import styled from 'styled-components';

export const Skills = () => {

    const [oldTab, setOldTab] = useState('frontend');

    const handleTabSelection = (tab) => {
        /** Want to make previous tab section invisible, and display current section */
        document.getElementById(`${oldTab}-content`).style.visibility = 'hidden'
        document.getElementById(oldTab).style.borderBottom = 'none'

        document.getElementById(`${tab}-content`).style.visibility = 'visible';

        if (tab === 'frontend') {
            document.getElementById(tab).style.borderBottom = 'solid 3px #00fff1';
        } else {
            document.getElementById(tab).style.borderBottom = 'solid 3px orange';
        }

        setOldTab(tab);
    }

    return (
        <SkillTabsWrapper id='skillsContentSection'>
            <TabSelection>
                <h3 onClick={() => handleTabSelection('frontend')} id='frontend'>Front-End</h3>
                <h3 onClick={() => handleTabSelection('backend')} id='backend'>Back-End</h3>
            </TabSelection>
            <SkillArticle id='frontend-content'>
                <ul>
                    React
                    <li>Async/Await</li>
                    <li>Hooks (useState, useEffect, useMemo, etc.)</li>
                </ul>

                <ul>
                    JavaScript
                    <li>Modern ES6/8 syntax - e.g. arrow functions, block-scoped constructs (Let and Const), template literals</li>
                    <li>AJAX & Fetch API methodologies</li>
                    <li>Object-Oriented Programming (OOP)</li>
                </ul>

                <ul>
                    Figma
                    <li>Pre-development wireframing of design to prevent "coding blind"</li>
                    <li>Neumorphic Design</li>
                </ul>

                <ul>
                    HTML
                    <li>Semantic HTML</li>
                </ul>

                <ul>
                    CSS
                    <li>Grid/FlexBox layout</li>
                    <li>CSS pre-processors such as Sass for dynamic CSS</li>
                </ul>
            </SkillArticle>

            <SkillArticle id='backend-content'>
                <ul>
                    Express
                    <li>Restful API</li>
                    <li>HTTP protocol requests</li>
                </ul>

                <ul>
                    MongoDB (NoSQL)
                    <li>User data storage for persistence</li>
                    <li>Database queries and manipulation through HTTP requests</li>
                    <li>Object Module Schemas</li>
                </ul>

                <ul>
                    Python
                    <li>Data analytics using Pandas for dataframe manipulation/queries</li>
                    <li>Exposure to ML libraries such as Tensorflow and Keras</li>
                </ul>
            </SkillArticle>
            {/* <SkillArticle>3</SkillArticle> */}

        </SkillTabsWrapper>
    )
}


const SkillTabsWrapper = styled.section`
    height: 70vh;
    width: 60vw;
    z-index: 1;
    position: absolute;
    transform: translateY(-20%);
    left: 50%;
    margin-left: -30vw;
    background: linear-gradient(45deg, orange, slateblue 60%);
    border-radius: 1rem 1rem 1rem 1rem;
    box-shadow: 0 5px 15px 10px #1B69DE;
    visibility: hidden;
    opacity: 0;
    
    #frontend {
        border-bottom: solid 3px #00fff1;
    }

    #backend-content {
        visibility: hidden;
    }
`;

const SkillArticle = styled.article`
    width: 100%;
    padding-left: 1.5em;
    height: 90%;
    position: absolute;
    padding-top: 1em;

    ul {
        padding: 0.5em;
        font-size: 20px;
        font-weight: 700;

        li {
            font-weight: 300;
            font-size: 18px;
        }
    }
`;

const TabSelection = styled.div`
    padding-top: 1em;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    h3 {
        font-size: 1.75rem;
        cursor: pointer;
    }

    div {

    }

    
`;