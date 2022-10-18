import React from 'react'
import styled from 'styled-components'
import logo from '../assets/imgs/TrackIt.svg'
import {STYLES} from '../constants/styles'

function Navbar({imgPerfil}) {
  return (
    <NavbarStyles styles={STYLES.navbar}>
      <Logo src={logo} alt='Logo do trackit'/>
      <ImgPerfil src={imgPerfil} alt='Imagem de Perfil do usuário' />
    </NavbarStyles>
  )
}

export default Navbar

const NavbarStyles = styled.header`
  background-color: ${props => props.styles.background};
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`

const ImgPerfil = styled.img`
  width: 51px;
  height: 51px;
  object-fit: cover;
  border-radius: 50%;
`

const Logo = styled.img`
  
`