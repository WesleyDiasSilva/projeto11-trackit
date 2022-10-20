import React from 'react'
import styled from 'styled-components'
import { STYLES } from '../constants/styles'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleForPage from '../components/TitleForPage'


function HabitsPage() {

  const img = "https://img.elo7.com.br/product/original/3254FDB/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-personalizados-bob-esponja-e-patrick.jpg"
  return (
    <>
      <Navbar imgPerfil={img}/>
      <ContainerHabits>
        <ContainerHeaderHabits>
          <TitleForPage >
            <span>Meus Hábitos</span>
            <span></span>
          </TitleForPage>
          <ButtonNewHabits styles={STYLES.button}>
            +
          </ButtonNewHabits>
        </ContainerHeaderHabits>
        <Info styles={STYLES.infoHabits}>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
          </Info>
      </ContainerHabits>
      <Footer / >
    </>
    
  )
}

export default HabitsPage

const ContainerHabits = styled.div`
  width: 100%;
  margin-top: 70px;
`


const ContainerHeaderHabits = styled.div`
  padding: 20px 10px 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ButtonNewHabits = styled.button`
  width: 40px;
  height: 35px;
  background-color: ${props => props.styles.background};
  border: none;
  border-radius: ${props => props.styles.borderRadius};
  font-size: 26px;
  color: ${props => props.styles.color};
  font-family: ${props => props.styles.fontFamily};
  font-weight: 700;
`

const Info = styled.div`
  padding: 0 10px;
  color: ${props => props.styles.color};
  font-family: ${props => props.styles.fontFamily};
  font-size: ${props => props.styles.fontSize};
`
