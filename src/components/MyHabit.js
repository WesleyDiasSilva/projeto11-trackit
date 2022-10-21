import React from 'react'
import styled from 'styled-components';
import trash from '../assets/imgs/trash.svg'


function MyHabit({name, days, setModal, id}) {
  function openModal(){
    setModal({status: true, id: id})
  }

  return (
    <ContainerInsertHabits>
      {name}
      <ContainerDays>
        <ContainerDaysHabits selected={days.includes(0)}>D</ContainerDaysHabits>
        <ContainerDaysHabits selected={days.includes(1)}>S</ContainerDaysHabits>
        <ContainerDaysHabits selected={days.includes(2)}>T</ContainerDaysHabits>
        <ContainerDaysHabits selected={days.includes(3)}>Q</ContainerDaysHabits>
        <ContainerDaysHabits selected={days.includes(4)}>Q</ContainerDaysHabits>
        <ContainerDaysHabits selected={days.includes(5)}>S</ContainerDaysHabits>
        <ContainerDaysHabits selected={days.includes(6)}>S</ContainerDaysHabits>
      </ContainerDays>
    <Trash onClick={openModal} src={trash}/>
    </ContainerInsertHabits>
  )
}

export default MyHabit

const ContainerInsertHabits = styled.div`
  height: 91px;
  border-radius: 5px;
  margin: 0 10px 15px 10px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
`;

const ContainerDays = styled.div`
  display: flex;
  padding: 15px 0px 0px 5px;
`;

const Trash = styled.img`
  width: 13px;
  height: 15px;
  position: absolute;
  right: 10px;
`

const ContainerDaysHabits = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${props => props.selected ? '#CFCFCF' : '#FFFFFF'};
  color: ${props => props.selected ? '#FFFFFF' : '#DBDBDB'};
  border-color: #D4D4D4;
  font-family: 'Lexend Deca';
  margin-right: 5px;
  border: 1px solid #D4D4D4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;