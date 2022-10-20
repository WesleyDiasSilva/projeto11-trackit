import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import HabitsToday from '../components/HabitsToday'
import Navbar from '../components/Navbar'
import TitleForPage from '../components/TitleForPage'

function TodayPage() {
  const img = "https://img.elo7.com.br/product/original/3254FDB/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-personalizados-bob-esponja-e-patrick.jpg"

  return (
    <>
     <Navbar imgPerfil={img}/>
     <ContainerToday>
     <ContainerHeaderToday>
       <TitleForPage>
        <span>Segunda, 17/05</span>
        <span>Nenhum hábito concluído ainda</span>
       </TitleForPage>
     </ContainerHeaderToday>
     <HabitsToday />
     <HabitsToday />
     <HabitsToday />
     <HabitsToday />
     </ContainerToday>
     <Footer />
    </>
  )
}

export default TodayPage

const ContainerHeaderToday = styled.div`
  padding: 20px 10px 12px 10px;
`

const ContainerToday = styled.div`
  margin-top: 70px;
  width: 100%;
`