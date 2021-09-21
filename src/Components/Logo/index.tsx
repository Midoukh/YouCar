import React from 'react'
import styled from 'styled-components'

import carLogo from '../../assets/images/car-logo.png'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
`
const LogoText = styled.div`
    font-weight: bold;
    color: black;
`

const Image = styled.div`
    width: auto;
    img{
        width: auto;
        height: 100%;
        margin-right: .2rem;
    }
`

export const Logo = () => {
    return(
        <LogoContainer>
            <Image>
                <img src={carLogo} alt="car logo" />
            </Image>
            <LogoText>
                YourCar.
            </LogoText>
        </LogoContainer>
    )
}