import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TitleForPage from "../components/TitleForPage";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../Contexts/UserContext";
import axios from "axios";
import { STYLES } from "../constants/styles";



function HistoryPage() {
  const User = React.useContext(UserContext);

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
        {
          headers: { Authorization: "Bearer " + User.user.user.token },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar imgPerfil={User.user.user.image} />
      <ContainerHistory>
        <ContainerHeaderHistory>
          <TitleForPage>
            Histórico
            <Info styles={STYLES}>Em breve você poderá ver o histórico dos seus hábitos aqui!</Info>
          </TitleForPage>
        </ContainerHeaderHistory>
      </ContainerHistory>

      <Footer />
    </>
  );
}

export default HistoryPage;

const ContainerHistory = styled.div`
  margin-top: 70px;
`;

const ContainerHeaderHistory = styled.div`
  padding: 20px 10px 12px 10px;
`;

const Info = styled.div`
  margin-top: 20px;
  color: #666666;
  font-family: ${(props) => props.styles.fontFamily};
  font-size: ${(props) => props.styles.fontSize};
`;

