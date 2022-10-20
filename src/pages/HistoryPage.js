import React from 'react'
import { Calendar } from 'react-calendar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TitleForPage from '../components/TitleForPage'
import 'react-calendar/dist/Calendar.css';

function HistoryPage() {

  const img = "https://img.elo7.com.br/product/original/3254FDB/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-personalizados-bob-esponja-e-patrick.jpg"

  return (
    <>
     <Navbar imgPerfil={img}/> 
     <ContainerHistory>
       <ContainerHeaderHistory>
         <TitleForPage>
          Histórico
          <span></span>
         </TitleForPage>
       </ContainerHeaderHistory>
       <Calendar/>
     </ContainerHistory>

     <Footer />
    </>
  )
}

export default HistoryPage

const ContainerHistory = styled.div`
  margin-top: 70px;
`

const ContainerHeaderHistory = styled.div`
  padding: 20px 10px 12px 10px;
`