import React from 'react'
import Button from '../components/Button'
import DontHaveAccount from '../components/DontHaveAccount'
import Form from '../components/Form'
import Input from '../components/Input'
import ContainerApp from '../containers/ContainerApp'
import ContainerLogo from '../containers/ContainerLogo'

function RegisterPage() {
  return (
    <div>
      <ContainerApp>
        <ContainerLogo />
        <Form>
          <Input type='text' placeholder='Email'/>
          <Input type='password' placeholder='Senha'/>
          <Input type='text' placeholder='Nome'/>
          <Input type='text' placeholder='Foto'/>
          <Button>Cadastrar</Button>
        </Form>
        <DontHaveAccount>
          Já tem uma conta? Faça login!
        </DontHaveAccount>
      </ContainerApp>
    </div>
  )
}

export default RegisterPage
