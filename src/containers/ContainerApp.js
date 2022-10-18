import React from 'react'
import styled from 'styled-components'

function ContainerApp({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ContainerApp

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  align-items: center;
`