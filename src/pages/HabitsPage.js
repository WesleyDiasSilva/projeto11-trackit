import React, { useEffect } from "react";
import styled from "styled-components";
import { STYLES } from "../constants/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TitleForPage from "../components/TitleForPage";
import { UserContext } from "../Contexts/UserContext";
import InsertHabits from "../components/InsertHabits";
import axios from "axios";
import MyHabit from "../components/MyHabit";

function HabitsPage() {
  const [inputHidden, setInputHidden] = React.useState(true);
  const [habits, setHabits] = React.useState([]);
  const User = React.useContext(UserContext);
  const [newHabit, setNewHabit] = React.useState("");
  const [modal, setModal] = React.useState({status:false, id: ''});

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          headers: { Authorization: "Bearer " + User.user.user.token },
        }
      )
      .then((res) => {
        setHabits(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newHabit]);

  function del() {
    axios.delete("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"+modal.id, {
      headers: { Authorization: "Bearer " + User.user.user.token }
    })
    .then(res => {
      console.log(res)
      setNewHabit(modal.id)
    })
    .catch(err => console.log(err))
    setModal({status: false, id: ''})
  }

  return (
    <>
      <Navbar imgPerfil={User.user.user.image} />
      {modal.status && (
        <ModalConfirmDelete>
          <ContainerCenterModal>
            <TextModal>Deseja Excluir o hábito?</TextModal>
            <div>
              <OptionModal onClick={() => setModal({status: false, id: ''})}>
                Cancelar
              </OptionModal>
              <OptionModal onClick={() => del()} delete={true}>
                Deletar
              </OptionModal>
            </div>
          </ContainerCenterModal>
        </ModalConfirmDelete>
      )}{" "}
      <ContainerHabits>
        <ContainerHeaderHabits>
          <TitleForPage>
            <span>Meus Hábitos</span>
            <span></span>
          </TitleForPage>
          <ButtonNewHabits
            onClick={() => setInputHidden(false)}
            styles={STYLES.button}
          >
            +
          </ButtonNewHabits>
        </ContainerHeaderHabits>
        {!inputHidden ? (
          <InsertHabits
            setNewHabit={setNewHabit}
            setInputHidden={setInputHidden}
          />
        ) : (
          ""
        )}
        <Info styles={STYLES.infoHabits}>
          {habits.length > 0
            ? habits.map((h) => (
                <MyHabit
                  id={h.id}
                  setModal={setModal}
                  key={h.id}
                  days={h.days}
                  name={h.name}
                />
              ))
            : "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
        </Info>
      </ContainerHabits>
      <Footer />
    </>
  );
}

export default HabitsPage;

const ContainerHabits = styled.div`
  width: 100%;
  margin-top: 70px;
  height: 100vh;
  background-color: #f2f2f2;
`;

const OptionModal = styled.button`
  width: 75px;
  height: 50px;
  border-radius: 5px;
  margin-right: 5px;
  margin-left: 5px;
  border: none;
  background-color: ${(props) => (props.delete ? "red" : "#FFF")};
  color: ${(props) => (props.delete ? "#FFF" : "#000")};
  font-size: 15px;
  font-weight: 700;
`;

const ModalConfirmDelete = styled.div`
  z-index: 100;
  width: 100%;
  height: 93vh;
  background-color: #f2f2f256;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca";
  position: fixed;
  top: 70px;
`;

const TextModal = styled.span`
  color: #fff;
  margin-left: 10px;
`;

const ContainerCenterModal = styled.div`
  background-color: red;
  width: 75%;
  height: 150px;
  border-radius: 5px;
  background-color: #126ba5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ContainerHeaderHabits = styled.div`
  padding: 20px 10px 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonNewHabits = styled.button`
  width: 40px;
  height: 35px;
  background-color: ${(props) => props.styles.background};
  border: none;
  border-radius: ${(props) => props.styles.borderRadius};
  font-size: 26px;
  color: ${(props) => props.styles.color};
  font-family: ${(props) => props.styles.fontFamily};
  font-weight: 700;
`;

const Info = styled.div`
  padding: 0 10px;
  color: ${(props) => props.styles.color};
  font-family: ${(props) => props.styles.fontFamily};
  font-size: ${(props) => props.styles.fontSize};
`;
