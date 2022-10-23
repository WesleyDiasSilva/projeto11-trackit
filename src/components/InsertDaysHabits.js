import React from "react";
import styled from "styled-components";

function InsertDaysHabits({ children, day,setDaysHabits, daysHabits }) {
  const [selected, setSelected] = React.useState(daysHabits.includes(day));


  function addDaysHabits(numberDay){

    if(!selected){
      setDaysHabits([...daysHabits, numberDay])
      setSelected(true)
    }else{
      setDaysHabits(daysHabits.filter(d => d !== numberDay))
      setSelected(false)
    }
  }

  return (
    <ContainerDaysHabits
      onClick={() => addDaysHabits(day)}
      selected={selected}
    >
      {children}
    </ContainerDaysHabits>
  );
}

export default InsertDaysHabits;

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
