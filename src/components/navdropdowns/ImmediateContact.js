import React from 'react';
import styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';

export default function ImmediateContact() {
    return (
       <ImmediateContactWrapper id='immediateContact'>
           <CancelIcon></CancelIcon>
           <PersonalContact>
                <h4>Phone:</h4>
                <p>519-619-3930</p>
           </PersonalContact>

           <PersonalContact>
               <h4>Email:</h4>
               <p>bdejene19@gmail.com</p>
           </PersonalContact>

           <PersonalContact>
               <h4>LinkedIn:</h4>
               <a href='https://www.linkedin.com/in/bemnet-dejene-8663521b1/'>https://www.linkedin.com/in/bemnet-dejene-8663521b1/</a>
           </PersonalContact>

           <PersonalContact>
               <h4>Github:</h4>
               <a href='https://github.com/bdejene19'>https://github.com/bdejene19</a>
           </PersonalContact>



       </ImmediateContactWrapper>
    )
}


const ImmediateContactWrapper = styled.article`
    width: 20vw;
    height: 40vh;
    padding: 0.5em;
    /* padding-right: 1em; */
    right: 0;
    top: -20%;
    /* border: solid black 3px; */
    border-radius: 2px 2px 2px 2px;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 2;
    background: linear-gradient(45deg, orange, slateblue 60%);
    box-shadow: 0 5px 25px 10px #1B69DE;
    opacity: 0;
    visibility: hidden;    
    h4 {
        opacity: 1;
        border-bottom: solid skyblue 1px;
    }

    p, a {
        padding-top: 0.5em;
    }
`;


const PersonalContact = styled.div`
    display: flex;
    height: fit-content;
    flex-direction: column;
`;

