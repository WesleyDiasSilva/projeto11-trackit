import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import HabitsToday from "../components/HabitsToday";
import Navbar from "../components/Navbar";
import TitleForPage from "../components/TitleForPage";
import { UserContext } from "../Contexts/UserContext";
import "dayjs/locale/pt-br";
import { ProgressContext } from "../Contexts/ProgressContext";

function TodayPage() {
  const [habitsToday, setHabitsToday] = React.useState([]);
  const [habitsChecked, setHabitsChecked] = React.useState([]);
  const [updateHabit, setUpdateHabit] = React.useState(true);

  const Progress = React.useContext(ProgressContext)

  const User = React.useContext(UserContext);

  const day = dayjs().day();
  const dayOfMonth = dayjs().date();
  const month = dayjs().month();

  let allHabits = habitsToday.length;
  let habitsCheck = habitsToday.filter((h) => h.done === true).length;

  

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {
          headers: { Authorization: "Bearer " + User.user.user.token },
        }
      )
      .then((res) => {
        Progress.setProgress(res.data);
        setHabitsToday(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateHabit]);

  const img = User.user.user.image

  function returnDate(day) {
    switch (day) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda";
      case 2:
        return "Terça";
      case 3:
        return "Quarta";
      case 4:
        return "Quinta";
      case 5:
        return "Sexta";
      case 6:
        return "Sábado";
      default:
        return "Dia não informado!";
    }
  }

  function setPercentage() {
    return ((habitsCheck / allHabits) * 100).toFixed(2).replace(".", ",");
  }

  return (
    <>
      <Navbar imgPerfil={img} />
      <ContainerToday>
        <ContainerHeaderToday>
          <TitleForPage>
            <span>
              {returnDate(day)}, {dayOfMonth}/{month + 1}
            </span>
            <SubtitleTodayPage
              haveHabit={
                habitsToday.filter((h) => h.done === true).length > 0
                  ? true
                  : false
              }
            >
              {habitsToday.filter((h) => h.done === true).length
                ? `${setPercentage()}% dos hábitos concluídos`
                : "Nenhum hábito concluído ainda"}
            </SubtitleTodayPage>
          </TitleForPage>
        </ContainerHeaderToday>
        {habitsToday.length > 0
          ? habitsToday.map((h) => (
              <HabitsToday
                updateHabit={updateHabit}
                setUpdateHabit={setUpdateHabit}
                setHabitsChecked={setHabitsChecked}
                habitsChecked={habitsChecked}
                key={h.name}
                habit={h}
              />
            ))
          : ""}
      </ContainerToday>
      <Footer />
    </>
  );
}

export default TodayPage;

const ContainerHeaderToday = styled.div`
  padding: 20px 10px 12px 10px;
`;

const ContainerToday = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
`;

const SubtitleTodayPage = styled.span`
  color: ${(props) => (props.haveHabit ? "#8FC549" : "#BABABA")};
`;
