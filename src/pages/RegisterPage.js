import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
      console.log(res)
      setInput(false)
    })
    .catch(err => {
      alert('Aqui vai uma notificação para o usuário!')
      console.log(err.response.data)
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
