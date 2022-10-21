import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import HabitsToday from '../components/HabitsToday'
import Navbar from '../components/Navbar'
import TitleForPage from '../components/TitleForPage'
import { UserContext } from '../Contexts/UserContext'


function TodayPage() {

  const [habitsToday, setHabitsToday] = React.useState([])

  const User = React.useContext(UserContext)

  useEffect(() => {
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
      headers : {Authorization: 'Bearer ' + User.user.user.token}})
    .then((res) => {
      console.log(res.data)
      setHabitsToday(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const img = User.user.user.image

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
     {habitsToday.length > 0 ? habitsToday.map(h => <HabitsToday key={h.name} habit={h} />) : ''}
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
  height: 100vh;
  background-color: #F2F2F2;
`