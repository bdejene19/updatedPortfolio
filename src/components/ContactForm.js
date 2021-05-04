import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


export default function ContactForm() {
    return (
        <ContactWrapper>
            <h2>Like what you see? Get in touch!</h2>
            <ContactSubmission method='POST' data-netlify='true'>
                <TextField className='commentInput' label="Name"/>
                <TextField className='commentInput' label="Contact Info"/>

                <div className='comments-section'>
                    {/* remember, a label's for attribute is for it's input element id*/}
                    <label for='comments'>Leave a comment or additional details:</label>
                    <textarea name='comments' id='comments'></textarea>
                </div>
                
                <Button type='submit' variant='contained' color='primary'>Submit</Button>
            </ContactSubmission>
            
        </ContactWrapper>
        
    )
}


const ContactWrapper = styled.section`
    width: 100%;
    height: 85vh;
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    background: linear-gradient(45deg, #00fff1, slateblue 60%);
    padding-bottom: 20em;
    
    h2 {
        font-size: 32px;
        justify-self: left;
        padding-left: 2em;
        padding-bottom: 1em;
        padding-top: 1.5em;
    }

`;

const ContactSubmission = styled.form`
    opacity: 0.8;
    padding: 2em;
    box-shadow: 5px 5px 0  skyblue;
    background-color: white;
    width: 50vw;
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
        }
    }

`;
