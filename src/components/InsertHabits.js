import axios from "axios";
import dayjs from "dayjs";
import React from "react";
import { Comment } from "react-loader-spinner";
import styled from "styled-components";
import { ProgressContext } from "../Contexts/ProgressContext";
import { UserContext } from "../Contexts/UserContext";
import Input from "./Input";
import InsertDaysHabits from "./InsertDaysHabits";




function InsertHabits({ nameHabit, setNameHabit, daysHabits, setDaysHabits, setInputHidden,  setNewHabit }) {

  const User = React.useContext(UserContext)
  const Progress = React.useContext(ProgressContext)

  const [loading, setLoading] = React.useState(false)
  const [controls, setControls] = React.useState(false);
  const [messageError, setMessageError] = React.useState('')

  const bodyPostHabit = {
    name: nameHabit,
    days: daysHabits
  }

  function registerHabit() {
    setControls(true)
    if(nameHabit === '' && daysHabits.length === 0){
      setMessageError('Por favor, preencha o nome e os dias do hábito!')
    setControls(false)
      return;
    }else if(nameHabit === ''){
      setMessageError('Por favor, preencha o nome do hábito')
      setControls(false)
      return;
    }else if(daysHabits.length === 0){
      setMessageError('Por favor, preencha os dias do hábito')
      setControls(false)
      return;
    }
    setLoading(true)
    axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", bodyPostHabit, {headers: {Authorization: 'Bearer ' + User.user.user.token}}
    )
    .then((res) => {
      setLoading(false)
      axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {
          headers: { Authorization: "Bearer " + User.user.user.token },
        }
      ).then(res => Progress.setProgress(res.data))
      setNewHabit(nameHabit)
      setInputHidden(true)
      setControls(false)
      setNameHabit('')
      setDaysHabits([])
    }
      )
    .catch((err) => {
      console.log(err)
      setLoading(false)
        setMessageError('Desculpe, tente novamente mais tarde!')  
      setControls(false)
    })

  }

  function cancelInsert(){
    setLoading(false)
    setInputHidden(true)
    setNameHabit(nameHabit)
    setDaysHabits([...daysHabits])
  }

  return (
    <ContainerInsertHabits>
      <Input value={nameHabit} status={controls} setValue={setNameHabit} placeholder="Nome do Hábito" />
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
          <CancelInsert  onClick={cancelInsert}>
            Cancelar
          </CancelInsert>
          <SaveInsert disabled={controls} onClick={registerHabit}>
          {loading ? <Comment
          visible={true}
          height="37"
          width="70"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#52B6FF"
        /> : 'Salvar'}
            </SaveInsert>
        </ControlsInsert>
      </ContainerDays>
      <MessageError>{messageError}</MessageError>
    </ContainerInsertHabits>
  );
}

export default InsertHabits;

const MessageError = styled.span`
  font-family: 'Lexend Deca';
  font-size: 15px;
  margin-top: 5px;
  margin-left: 5px;
  color: #c71508;
`

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
