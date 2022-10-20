import React from 'react'
import styled from 'styled-components'
import {STYLES} from '../constants/styles'

function DontHaveAccount({children}) {
  return (
    <Text styles={STYLES.button}>
      {children}
    </Text>
  )
}

export default DontHaveAccount

const Text = styled.span`
  text-decoration: underline;
  color: ${props => props.styles.background};
  font-family: ${props => props.styles.fontFamily};
  font-size: 14px;
  margin-top: 25px;
`