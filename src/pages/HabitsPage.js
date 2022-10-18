import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ContainerApp from '../containers/ContainerApp'

function HabitsPage() {

  const img = "https://img.elo7.com.br/product/original/3254FDB/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-personalizados-bob-esponja-e-patrick.jpg"
  return (
    <>
      <Navbar imgPerfil={img}/>
      <ContainerHabits>
        Opa
      </ContainerHabits>
    </>
    
  )
}

export default HabitsPage

const ContainerHabits = styled.div`
  width: 100%;
  margin-top: 70px;
`


