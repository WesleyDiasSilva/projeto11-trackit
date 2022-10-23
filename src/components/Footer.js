import React from "react";
import styled from "styled-components";
import { STYLES } from "../constants/styles";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom'

import { ProgressContext } from "../Contexts/ProgressContext";


function Footer() {

  const Progress = React.useContext(ProgressContext)

  function porcentProgress(){
    if(Progress.progress){
      const allHabits = Progress.progress.length;
      const habitsOk = Progress.progress.filter((h) => h.done === true).length;
      const result = (habitsOk / allHabits * 100);
      return result;
    }
    return 70;
  }

  return (
    <FooterStyle>
      <StyledLink to='/habitos'>
        <OptionsFooter styles={STYLES.button}>
            Hábitos
        </OptionsFooter>
        </StyledLink>
      
      <ContainerProgressBar>
        <Link to='/hoje'>
          <ProgressBar>
            <CircularProgressbar backgroundPadding={5} background styles={buildStyles({
          backgroundColor: "#3e98c7", textColor: '#fff',pathColor: '#fff', trailColor: 'transparent'})} value={porcentProgress()} text='Hoje'/>
          </ProgressBar>
        </Link>
      </ContainerProgressBar>
      <StyledLink to='/historico'>
        <OptionsFooter styles={STYLES.button}>Histórico</OptionsFooter>
        </StyledLink>
    </FooterStyle>
  );
}

export default Footer;

const ContainerProgressBar = styled.div`
  height: 135px;
  width: 90px;
`

const ProgressBar = styled.div`

`

const FooterStyle = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 70px;
  background-color: #FFF;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
`;

const OptionsFooter = styled.span`
  font-family: ${(props) => props.styles.fontFamily};
  font-size: 17px;
  color: ${(props) => props.styles.background};
  text-decoration: none;
`;

const StyledLink  = styled(Link)`
  text-decoration: none;
`;