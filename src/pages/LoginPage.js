import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import DontHaveAccount from "../components/DontHaveAccount";
import Form from "../components/Form";
import Input from "../components/Input";
import ContainerApp from "../containers/ContainerApp";
import ContainerLogo from "../containers/ContainerLogo";
import { UserContext } from "../Contexts/UserContext";

function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(undefined);


  const navigate = useNavigate();

  const User = React.useContext(UserContext);

  const body = {
    email: email,
    password: password,
  };

  if (localStorage.getItem("User")) {
    const localGetUserStorage = localStorage.getItem("User");
    const userImage = JSON.parse(localGetUserStorage).image;
    const userToken = JSON.parse(localGetUserStorage).token;
    User.setUser({ user: { image: userImage, token: userToken } });
    navigate("/hoje");
  }

  function login() {
      setInput(true);
      setLoading(true);
      axios
        .post(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
          body
        )
        .then((res) => {
          User.setUser({ user: res.data });
          const LocalUser = JSON.stringify({
            token: res.data.token,
            image: res.data.image,
          });
          localStorage.setItem("User", LocalUser);
          navigate("/hoje");
          setLoading(false);
          setInput(false);
        })
        .catch((err) => {
          console.log(err.response.data.message)
          if(err.response.data.message === 'Campo "body" inválido!'){
            setError('Por favor, preencha todos os campos!');
          }else{
            setError(err.response.data.message);
          }
          setTimeout(() => {
          setError(undefined);

          }, 3000)
          setInput(false);
          setLoading(false);
        });
    }
  
  return (
    <div>
      <ContainerApp>
        <ContainerLogo />
        <Form>
          <Input
            setValue={setEmail}
            value={email}
            status={input}
            type="text"
            placeholder="Email"
          />
          <Input
            setValue={setPassword}
            value={password}
            status={input}
            type="password"
            placeholder="Senha"
          />
          <Button onClick={login} loading={loading}>
            Entrar
          </Button>
          {error && <MessageError>{error}</MessageError>}
        </Form>
        <Link to="/cadastro">
          <DontHaveAccount>Não tem uma conta? Cadastre-se!</DontHaveAccount>
        </Link>
      </ContainerApp>
    </div>
  );
}

export default LoginPage;

const MessageError = styled.div`
  text-align: center;
  font-family: 'Lexend Deca';
  font-size: 16px;
  color: #E75766;
  margin-bottom: 10px;
`