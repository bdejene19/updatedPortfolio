import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { handleTabSelection } from '../componentFunctions';
import { CloseModalIcon } from './AboutMe';

export const Skills = () => {

    const [oldTab, setOldTab] = useState('frontend');

   
    useEffect(() => {
        handleTabSelection(oldTab);
    }, [oldTab])

    return (
        <SkillTabsWrapper id='skillsContentSection'>
            <TabSelection>
                <CloseModalIcon/>
                <h3 onClick={() => setOldTab('frontend')} id='frontend'>Front-End</h3>
                <h3 onClick={() => setOldTab('backend')} id='backend'>Back-End</h3>
            </TabSelection>
        <SkillArticle id='frontend-content'>
                <ul>
                    TypeScript
                    <li>Type Checking React and other libraries (e.g. Redux)</li>
                    <li>OOP and JSX implementations on web and mobile applications</li>
                </ul>

                <ul>
                    React
                    <li>Async/Await</li>
                    <li>Hooks (useState, useEffect, useMemo, etc.)</li>
                    <li>Generating reusable components through inheritance </li>
                    <li>React Router (multi-page application Vs. SPA)</li>
                </ul>

                <ul>
                    React Native
                    <li>Native Components, Gesture Handlers, and nested Navigators for screen navigation</li>
                    <li>Reusable StyleSheets and TypeScript typing</li>
                </ul>

                <ul>
                    Next
                    <li>Server-Side Rendering (SSR)</li>
                    <li>Routing</li>
                </ul>

                <ul>
                    JavaScript
                    <li>Modern ES6/8 syntax - e.g. arrow functions, block-scoped constructs (Let and Const), template literals</li>
                    <li>AJAX & Fetch API methodologies</li>
                    <li>Object-Oriented Programming (OOP)</li>
                </ul>

                <ul>
                    Redux/React-Redux
                    <li>State Management</li>
                    <li>Global state access, implement Reducers to dispatch systematic actions for state updates in necessary components (useSelector, useDispatch)</li>
                </ul>

                <ul>
                    Figma
                    <li>Pre-development wireframing of design to prevent "coding blind"</li>
                    <li>Neumorphic Design</li>
                </ul>

                <ul>
                    Material-UI (MUI)
                    <li>Reuse, customize and alter pre-built React components</li>
                    <li>Components used range from form-steppers, buttons, and icons</li>
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

        </SkillTabsWrapper>
    )
}


const SkillTabsWrapper = styled.section`
    height: 70vh;
    width: 80vw;
    z-index: 1;
    position: absolute;
    transform: translateY(-20%);
    /* margin-left: 50%; */
    margin-left: 10vw;
    background: linear-gradient(45deg, orange, slateblue 60%);
    border-radius: 1rem 1rem 1rem 1rem;
    box-shadow: 0 5px 15px 10px #1B69DE;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    overflow-y: scroll;
    
    #frontend {
        border-bottom: solid 3px #00fff1;
    }

    #backend-content {
        visibility: hidden;
    }

    @media screen and (max-width: 375px) {
        width: 95%;
        margin-left: 2.5%;
        height: 85vh;
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
        font-size: 28px;
        font-weight: 700;

        li {
            font-weight: 300;
            font-size: 24px;
        }
    }
`;

const TabSelection = styled.div`
    padding-top: 1em;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    div {
        grid-column: 1/3;
        justify-self: right;
        padding-right: 1em;
    }
    h3 {
        font-size: 1.75rem;
        cursor: pointer;
    }

    div {

    }

    
`;