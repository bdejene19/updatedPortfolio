import React from 'react';
import styled from 'styled-components';

export default function ImmediateContact() {
    return (
       <ImmediateContactWrapper id='immediateContact'>
           <PersonalContact>
                <h4>Phone:</h4>
                <p style={{width: 'max-content'}}>519-619-3930</p>
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
    width: fit-content;
    height: 40vh;
    padding: 0.5em;
    right: 0;
    top: -20%;
    border-radius: 2px 2px 2px 2px;
    position: absolute;
    display: grid;
    grid-template-rows: repeat(4,);;
    z-index: 2;
    background: linear-gradient(45deg, orange, slateblue 60%);
    box-shadow: 0 5px 25px 10px #1B69DE;
    opacity: 0;
    visibility: hidden;  
    z-index: -1;  
    h4 {
        opacity: 1;
        border-bottom: solid skyblue 1px;
    }

    p, a {
        padding-top: 0.5em;
        width: min-content;
        height: fit-content;

        @media screen and (max-width: 1024px) {
            width: 28vw;
            /* p, a {
                width: 70%;
                border: solid green 3px;
            } */
        }
    }
`;


const PersonalContact = styled.div`
    display: flex;
    height: fit-content;
    flex-direction: column;
`;

