import React from 'react'
import { Calendar } from 'react-calendar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TitleForPage from '../components/TitleForPage'
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../Contexts/UserContext'


function HistoryPage() {

  const User = React.useContext(UserContext)

  return (
    <>
     <Navbar imgPerfil={User.user.user.image}/> 
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