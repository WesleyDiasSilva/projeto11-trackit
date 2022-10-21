import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()

  const User = React.useContext(UserContext);

  function login(){
    setInput(true)
    setLoading(true)

    const body = {
      email: email,
      password: password,
    }

    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',body)
    .then(res => {
      User.setUser({user: res.data})
      navigate('/hoje')
      setLoading(false)
      setInput(false)
    })
    .catch(err => {
      alert('Notificação de erro pro usuário')
      setInput(false)
      setLoading(false)
    })
  }

  return (
    <div>
      <ContainerApp>
        <ContainerLogo />
        <Form>
          <Input setValue={setEmail} value={email} status={input} type="text" placeholder="Email" 
          />
          <Input setValue={setPassword} value={password} status={input} type="password" placeholder="Senha" />
          <Button onClick={login} loading={loading}>Entrar</Button>
        </Form>
        <Link to='/cadastro'>
          <DontHaveAccount>Não tem uma conta? Cadastre-se!</DontHaveAccount>
        </Link>
        
      </ContainerApp>
    </div>
  );
}

export default LoginPage;
