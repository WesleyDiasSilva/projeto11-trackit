import React from 'react'
import Button from '../components/Button'
import DontHaveAccount from '../components/DontHaveAccount'
import Form from '../components/Form'
import Input from '../components/Input'
import ContainerApp from '../containers/ContainerApp'
import ContainerLogo from '../containers/ContainerLogo'

function LoginPage() {
  return (
    <div>
      <ContainerApp>
        <ContainerLogo />
        <Form>
          <Input type='text' placeholder='Email'/>
          <Input type='password' placeholder='Senha'/>
          <Button>Entrar</Button>
        </Form>
        <DontHaveAccount>
          Não tem uma conta? Cadastre-se!
        </DontHaveAccount>
      </ContainerApp>
    </div>
  )
}

export default LoginPage
