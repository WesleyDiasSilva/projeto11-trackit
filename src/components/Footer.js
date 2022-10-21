import React from "react";
import styled from "styled-components";
import { STYLES } from "../constants/styles";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom'

function Footer() {

  const percentage = 95;



  return (
    <FooterStyle>
      <Link to='/habitos'>
        <OptionsFooter styles={STYLES.button}>
          
            Hábitos
          
        </OptionsFooter>
        </Link>
      
      <ContainerProgressBar>
        <Link to='/hoje'>
          <ProgressBar>
            <CircularProgressbar value={68} text='Hoje'/>
          </ProgressBar>
        </Link>
      </ContainerProgressBar>
      <Link to='/historico'>
        <OptionsFooter styles={STYLES.button}>Histórico</OptionsFooter>
        </Link>
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
`;

const OptionsFooter = styled.span`
  font-family: ${(props) => props.styles.fontFamily};
  font-size: 17px;
  color: ${(props) => props.styles.background};
  text-decoration: none;
`;
