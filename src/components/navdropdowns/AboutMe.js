import React, { useContext } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { ModalContext } from '../../App';

export default function AboutMe() {
    const { setAboutExpanded } = useContext(ModalContext);
    return (
    <AboutMeWrapper id='aboutMe-article'>
           <CloseModalIcon handleOpen={() => setAboutExpanded(false)}/>
           <h3>Life Outside of Work</h3>
           <p>On paper, I am currently located in London, Ontario and have a Double Major in Medical Sciences and Biology from the University of Western Ontario. Between the lines, I am an easy going person who's always smiling and love to express my creative thinking through code, piano, guitar and even freestyle rapping 🎶 (no sound cloud, haha).</p>
           <p>The reason I fell in love with code was that it enabled my creative and logistic STEM halves of myself to work in tandem to create something meaningful and has an impact on other peoples lives.</p>
    </AboutMeWrapper>
    )
}

export const CloseModalIcon = (props) => {    
    return (
        <CloseIconWrapper>
            <CloseIcon className='exit' onClick={props.handleOpen}/>
        </CloseIconWrapper>
    )
}
const CloseIconWrapper = styled.div`
        display: grid;

        .exit {
            justify-self: flex-end;
            font-weight: 600;
            transform: rotate(45deg);
            cursor: pointer;
            font-size: 1.75rem;
            transition: 0.3s linear;


        }

        .exit:hover {
            color: red;
            border: 2px solid red;
            border-radius: 50%;
            transform: rotateY(0deg);
            transition: 0.3s linear;
        }
        
    
`;

const AboutMeWrapper = styled.article`
    width: 0;
    height: 0;
    padding: 1em;
    position: absolute;
    left: 50%;
    margin-left: 0vw;
    background: linear-gradient(45deg, orange, slateblue 60%);
    border-radius: 20px 20px 20px 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    top: 20%;
    visibility: hidden;
    overflow: hidden;
    opacity: 0;
    z-index: 4;

    p {
        font-size: 24px;
        font-weight: 600;
        opacity: 1;
    }

   
    @media screen and (max-width: 400px) {
        p {
            font-size: 1.25rem;
        }
    }


`;


