import React from 'react'
import styled from 'styled-components'
import {STYLES} from '../constants/styles'

function Button ({children}) {
  return (
    <ButtonStyle styles={STYLES.button}>
      {children}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  width: 100%;
  height: 45px;
  border-radius: ${props => props.styles.borderRadius};
  border: none;
  background-color: ${props => props.styles.background};
  color: ${props => props.styles.color};
  font-family: ${props => props.styles.fontFamily};
  font-size: ${props => props.styles.fontSize};
`