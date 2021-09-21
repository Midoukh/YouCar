import React from 'react'

import styled from 'styled-components'

import { Logo } from '../Logo'
import { NavItems } from './NavItems';

const NavBarContainer = styled.div`
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
`

export const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo />
            <NavItems />

        </NavBarContainer>
    )
}

