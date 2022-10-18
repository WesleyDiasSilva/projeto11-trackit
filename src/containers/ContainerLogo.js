import React from 'react'
import styled from 'styled-components'
import logoHome from '../assets/imgs/Group 8.svg'

function ContainerLogo() {
  return (
    <LogoHome src={logoHome} alt='Logo da página de login e cadastro!'/>
  )
}

export default ContainerLogo

const LogoHome = styled.img`
  width: 180px;
  height: 178px;
  margin-bottom: 32px;
`