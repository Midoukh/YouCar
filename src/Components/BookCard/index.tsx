import React from 'react'
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Button } from '../Button'

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: 0 1.3px 12px -3px rgba(0,0,0,.4);
    min-height: 4.3em;
`

const ItemContainer = styled.div`
    display: flex;
`

const Icon = styled.span`
    color: #FF3124;
    /* fill: currentColor; */

`

const Name = styled.span`
    color: gray;

`
const LineSeperator = styled.span`
    width: 2px;
    height: 45%;
    background-color: #ccc;
`

export const BookCard = () => {
    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                {/* <FontAwesomeIcon icon={faCalendarAlt} /> */}
                </Icon>
                <Name>Pick Up Date</Name>
            </ItemContainer>
            <LineSeperator />
            <ItemContainer>
                <Icon>
                {/* <FontAwesomeIcon icon={faCalendarAlt} /> */}
                </Icon>
                <Name>Return Date</Name>
            </ItemContainer>
            <Button text="Book your ride" theme="outlined"/>
        </CardContainer>
    )
}