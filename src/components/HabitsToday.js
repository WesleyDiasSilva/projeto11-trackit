import React from "react";
import styled from "styled-components";
import check from "../assets/imgs/Vector.svg";

function HabitsToday({habit}) {

  const [habitCheck, setHabitCheck] = React.useState(false)

  return (
    <ContainerHabit>
      <TextHabit>
        <TitleHabit>{habit ? habit.name : ''}</TitleHabit>
        <div>
          <div>
            <NormalText>Sequência atual:</NormalText>
            <TextDays> 3 dias</TextDays>
          </div>
          <div>
            <NormalText>Seu recorde:</NormalText> 
            <TextDays> 5 dias</TextDays>
          </div>
        </div>
      </TextHabit>
      <CheckHabit onClick={() => setHabitCheck(!habitCheck)} status={habitCheck}>
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
  color: #8FC549;
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
