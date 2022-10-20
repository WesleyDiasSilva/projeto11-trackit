import React from 'react'
import styled from 'styled-components'
import { STYLES } from '../constants/styles'


function TitleForPage({children}) {

  return (
    <ContainerTitle>
    <Title styles={STYLES.titleMyHabits}>
      {children[0]}
    </Title>
    <Subtitle styles={STYLES.titleMyHabits}>
      {true && children[1]}
    </Subtitle>
    </ContainerTitle>
  )
}

export default TitleForPage

const ContainerTitle = styled.div`
  height: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  color: ${props => props.styles.background};
  font-family: ${props => props.styles.fontFamily};
  font-size: ${props => props.styles.fontSize};
  font-weight: 500;
`

const Subtitle = styled.span`
  font-family: ${props => props.styles.fontFamily};
  color: #BABABA;
  font-size: 18px;
`