import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { sendEmail } from './componentFunctions';


export default function ContactForm() {

    
    return (
        <ContactWrapper>
            <h2>Like what you see? Get in touch!</h2>
            <ContactSubmission onSubmit={sendEmail}>
                <TextField className='commentInput' name='name' label="Name" required/>
                <TextField className='commentInput' name='contactReason' label="Contact Reason"/>

                <div className='comments-section'>
                    {/* remember, a label's for attribute is for it's input element id*/}
                    <label for='comments'>Leave a comment, additional details and/or contact info:</label>
                    <textarea name='comments' id='comments' required></textarea>
                </div>
                
                <Button type='submit' variant='contained' color='primary'>Submit</Button>
            </ContactSubmission>
            <p id='comments-submission'>Thanks for reaching out, I'll get back to you as soon as I can!</p>
            
        </ContactWrapper>
        
    )
}


const ContactWrapper = styled.section`
    width: 100%;
    height: fit-content;
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    background: linear-gradient(45deg, #00fff1, slateblue 60%);
    padding-bottom: 3em;
    h2 {
        font-size: 32px;
        justify-self: left;
        padding-left: 2em;
        padding-bottom: 1em;
        padding-top: 1em;
    }

    p {
        padding-top: 2em;
        /* padding-left: 1em; */
        text-align: center;
        font-weight: 900;
        display: none;
        font-size: 24px;
    }

    @media screen and (max-width: 375px) {
        h2 {
            padding-left: 1em;
        }
    }

`;

const ContactSubmission = styled.form`
    opacity: 0.8;
    padding: 2em;
    box-shadow: 5px 5px 0  skyblue;
    background-color: white;

    /* height: 65vh; */
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    border-radius: 3px 3px 3px 3px;

    
    
    .comments-section {
        width: 100%;
       

        textarea {
            margin-top: 1em;
            width: 100%;
            height: 15vh;
            resize: vertical;
            max-height: 25vh;
            padding: 0.5em;
            font-size: 16px;
        }
    }

    @media screen and (min-width: 2100px) {
        width: 70vw;
    }
    @media screen and (max-width: 375px) {
        width: 100%;

       
    }

`;
