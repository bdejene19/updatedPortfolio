import React from 'react';
import styled from 'styled-components';
import InfoDrawer from './InfoDrawer';

export default function PhoneNavBar() {
    return (
        <PhoneNavWrapper>
            <InfoDrawer></InfoDrawer>
        </PhoneNavWrapper>
    )
}

const PhoneNavWrapper = styled.nav`
    display: none; 
    

    @media screen and (max-width: 600px) {
        display: block;
        
    }

`;

