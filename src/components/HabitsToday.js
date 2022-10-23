import axios from "axios";
import React from "react";
import styled from "styled-components";
import check from "../assets/imgs/Vector.svg";
import { UserContext } from "../Contexts/UserContext";



function HabitsToday({habit, setHabitsChecked, habitsChecked, updateHabit, setUpdateHabit}) {

  const User = React.useContext(UserContext)

  const [habitCheck, setHabitCheck] = React.useState(habit.done)

  if(habitCheck){
    // setHabitsChecked([...habitsChecked, habit.id])
  }

  function checkHabit(){
    
    if(!habitCheck){
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, {
        headers: { Authorization: "Bearer " + User.user.user.token },
      })
      .then(res => {
        setHabitsChecked([...habitsChecked, habit.id])
        setUpdateHabit(!updateHabit)
      })
      .catch(err => console.log(err.response))
    }else{
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, {
        headers: { Authorization: "Bearer " + User.user.user.token },
      })
      .then(res => {
        setHabitsChecked(habitsChecked.filter((h) => h !== habit.id))
        setUpdateHabit(!updateHabit)
      })
      .catch(err => console.log(err.response))
    }
    setHabitCheck(!habitCheck)
  }

  return (
    <ContainerHabit>
      <TextHabit>
        <TitleHabit>{habit ? habit.name : ''}</TitleHabit>
        <div>
          <div>
            <NormalText>Sequência atual: </NormalText>
            <TextDays check={habitCheck}>{habit.currentSequence}</TextDays>
          </div>
          <div>
            <NormalText>Seu recorde: </NormalText> 
            <TextDays check={habit.currentSequence >= habit.highestSequence && habit.currentSequence !== 0}>{habit.highestSequence}</TextDays>
          </div>
        </div>
      </TextHabit>
      <CheckHabit onClick={checkHabit} status={habitCheck}>
        <Check src={check} />
      </CheckHabit>
    </ContainerHabit>
  );
}

export default HabitsToday;

const ContainerHabit = styled.div`
  height: 94px;
  border-radius: 5px;
  margin: 0 5px 15px 10px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: #FFF;
`;

const TextDays = styled.span`
  font-family: 'Lexend Deca';
  font-size: 12px;
  color: ${props => props.check ? "#8FC549" : "#666"};
`;

const TextHabit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NormalText = styled.span`
  font-family: 'Lexend Deca';
  font-size: 12px;
  color: #666;
`

const TitleHabit = styled.div`
  font-family: 'Lexend Deca';
  font-size: 19px;
  color: #666;
`

const Check = styled.img``;

const CheckHabit = styled.div`
  background-color: ${props => props.status ? '#8FC549' : '#F2F2F2'};
  height: 69px;
  width: 69px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
