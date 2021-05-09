import React from 'react';
import {Menu} from '@material-ui/icons';
import styled from 'styled-components';

export default function PhoneNavBar() {
    return (
        <PhoneNavWrapper>
            <Menu/>
        </PhoneNavWrapper>
    )
}

const PhoneNavWrapper = styled.nav`
    width: 100%;
    background-color: #1B69DE;
    padding: 0.5em;
    display: none;
    color: white;

    @media screen and (max-width: 600px) {
        display: block;
    }

`;
