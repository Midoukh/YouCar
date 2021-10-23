import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from '@material-ui/core'
import { SCREENS } from '../responsive'
import menyStyle from './menuStyle'

const ListContainer = styled.ul`
    display: flex;
    width: 50%;
    justify-content: space-around;
    li {
        list-style: none;
    }
`
const NavItem = styled.li`
    font-size: 1em;
    cursor: pointer;
    transition: all .3s ease-in-out;
   
    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
    a:hover {
        color: grey;
    }
`
export const NavItems = () => {
    const isMobile = useMediaQuery(`(max-width: ${SCREENS.small})`)
    if (isMobile){
        return (
            <Menu right styles={menyStyle}>
                <ListContainer style={{ margin: '0' }}>
                    
                    <NavItem style={{ marginBottom: '1.5rem', opacity: '.9' }}>
                        <a href="#" style={{ color: 'white' }}>Home</a>
                    </NavItem>
                    <NavItem style={{ marginBottom: '1.5rem', opacity: '.9' }}>
                        <a href="#" style={{ color: 'white' }}>Cars</a>
                    </NavItem> 
                    <NavItem style={{ marginBottom: '1.5rem', opacity: '.9' }}>
                        <a href="#" style={{ color: 'white' }}>Services</a>
                    </NavItem>
                    <NavItem style={{ marginBottom: '1.5rem', opacity: '.9' }}>
                        <a href="#" style={{ color: 'white' }}>Contact</a>
                    </NavItem>
                </ListContainer>
            </Menu>
        )
       
       
    }
    return(
        <ListContainer>
            
            <NavItem>
                <a href="#">Home</a>
            </NavItem>
            <NavItem>
                <a href="#">Cars</a>
            </NavItem> <NavItem>
                <a href="#">Services</a>
            </NavItem>
            <NavItem>
                <a href="#">Contact</a>
            </NavItem>
        </ListContainer>
    )
}