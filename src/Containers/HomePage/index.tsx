import React from 'react'
import styled from 'styled-components'

import { NavBar } from '../../Components/NavBar'
import { TopSection } from './TopSection'
import { BookCard } from '../../Components/BookCard';

const StyledHomePage = styled.div`
    max-width: 100vw;
    height: 100%;
    display: flex;
    flex-flow: column;
    overflow-x: hidden;
    padding: 0 70px;
    @media (max-width: 500px){
        padding: 0 30px;

    }
`

export const HomePage = () => {
    return (
        <StyledHomePage>
            <NavBar />
            <TopSection />
            <BookCard />
        </StyledHomePage>
    )
}