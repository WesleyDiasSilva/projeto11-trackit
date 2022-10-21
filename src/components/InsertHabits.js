import axios from "axios";
import React from "react";
import styled from "styled-components";
import { UserContext } from "../Contexts/UserContext";
import Input from "./Input";
import InsertDaysHabits from "./InsertDaysHabits";


function InsertHabits({ setInputHidden, days, setNewHabit }) {

  const User = React.useContext(UserContext)

  const [nameHabit, setNameHabit] = React.useState("");
  const [daysHabits, setDaysHabits] = React.useState([]);
  const [controls, setControls] = React.useState(false);

  const bodyPostHabit = {
    name: nameHabit,
    days: daysHabits
  }

  function registerHabit() {
    setControls(true)
    axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", bodyPostHabit, {headers: {Authorization: 'Bearer ' + User.user.user.token}}
    )
    .then((res) => {
      console.log(res)
      setNewHabit(nameHabit)
    }
      )
    .catch((err) => {
      console.log(err)
    })
    setInputHidden(true)
    setControls(false)
  }

  return (
    <ContainerInsertHabits>
      <Input status={controls} setValue={setNameHabit} placeholder="Nome do Hábito" />
      <ContainerDays>
        <InsertDaysHabits
          setDaysHabits={setDaysHabits}
          daysHabits={daysHabits}
          day="0"
        >
          D
        </InsertDaysHabits>
        <InsertDaysHabits
          setDaysHabits={setDaysHabits}
          daysHabits={daysHabits}
          day="1"
        >
          S
        </InsertDaysHabits>
        <InsertDaysHabits
          setDaysHabits={setDaysHabits}
          daysHabits={daysHabits}
          day="2"
        >
          T
        </InsertDaysHabits>
        <InsertDaysHabits
          setDaysHabits={setDaysHabits}
          daysHabits={daysHabits}
          day="3"
        >
          Q
        </InsertDaysHabits>
        <InsertDaysHabits
          setDaysHabits={setDaysHabits}
          daysHabits={daysHabits}
          day="4"
        >
          Q
        </InsertDaysHabits>
        <InsertDaysHabits
          setDaysHabits={setDaysHabits}
          daysHabits={daysHabits}
          day="5"
        >
          S
        </InsertDaysHabits>
        <InsertDaysHabits
          setDaysHabits={setDaysHabits}
          daysHabits={daysHabits}
          day="6"
        >
          S
        </InsertDaysHabits>
        <ControlsInsert>
          <CancelInsert  onClick={() => setInputHidden(true)}>
            Cancelar
          </CancelInsert>
          <SaveInsert disabled={controls} onClick={registerHabit}>Salvar</SaveInsert>
        </ControlsInsert>
      </ContainerDays>
    </ContainerInsertHabits>
  );
}

export default InsertHabits;

const ContainerInsertHabits = styled.div`
  height: 180px;
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

const ControlsInsert = styled.div`
  position: absolute;
  width: 200px;
  bottom: 15px;
  right: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CancelInsert = styled.span`
  font-family: "Lexend Deca";
  font-size: 15px;
  color: #52b6ff;
  cursor: pointer;
`;

const SaveInsert = styled.button`
  width: 85px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 5px;
  border: none;
  font-family: "Lexend Deca";
  font-size: 15px;
  color: #fff;
  cursor: pointer
`;
