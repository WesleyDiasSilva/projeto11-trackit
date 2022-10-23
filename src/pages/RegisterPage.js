import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import DontHaveAccount from '../components/DontHaveAccount'
import Form from '../components/Form'
import Input from '../components/Input'
import ContainerApp from '../containers/ContainerApp'
import ContainerLogo from '../containers/ContainerLogo'

function RegisterPage() {

  const [input, setInput] = React.useState(false);
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [image, setImage] = React.useState('')
  const [error, setError] = React.useState(undefined)

  const navigate = useNavigate()

  function register(){
    setInput(true);
    const body = {
      email: email,
      name: name,
      image: image,
      password: password,
    }

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
    .then(res => {
      navigate('/')
      setInput(false)
    })
    .catch(err => {
      if(err.response.data.details.length > 0){
        setError('Por favor, preencha todos os campos corretamente!');
      }else{
        setError('No momento não foi possível realizar o seu cadastro, tente novamente mais tarde!');
      }
      setTimeout(() => {
        setError(undefined)
      }, 3000)
      setInput(false)
    })
  }

  return (
    <div>
      <ContainerApp>
        <ContainerLogo />
        <Form>
          <Input value={email} setValue={setEmail} status={input} type='text' placeholder='Email'/>
          <Input value={password} setValue={setPassword} status={input} type='password' placeholder='Senha'/>
          <Input value={name} setValue={setName} status={input} type='text' placeholder='Nome'/>
          <Input value={image} setValue={setImage} status={input} type='text' placeholder='Foto'/>
          <Button onClick={register}>Cadastrar</Button>
        </Form>
        {error && <MessageError>{error}</MessageError>}
        <Link to='/'>
          <DontHaveAccount>
            Já tem uma conta? Faça login!
          </DontHaveAccount>
        </Link>
      </ContainerApp>
    </div>
  )
}

export default RegisterPage

const MessageError = styled.div`
  text-align: center;
  font-family: 'Lexend Deca';
  font-size: 16px;
  color: #E75766;
  margin-bottom: 10px;
`