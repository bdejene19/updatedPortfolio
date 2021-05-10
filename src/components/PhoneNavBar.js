import React from 'react';
import {Menu} from '@material-ui/icons';
import styled from 'styled-components';
import InfoDrawer from './InfoDrawer';

export default function PhoneNavBar() {
    return (
        // <PhoneNavWrapper>
        //     <MenuContentWrapper>
        //         <Menu/>

        //         hello
        //     </MenuContentWrapper>
        // </PhoneNavWrapper>
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

const MenuContentWrapper = styled.div`
    padding: 0.5em;
    display: flex;
    flex-direction: column;
`;
