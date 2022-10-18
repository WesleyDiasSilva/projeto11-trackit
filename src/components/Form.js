import React from 'react'
import styled from 'styled-components'



function Form({children}) {
  return (
    <FormStyle>
      {children}
    </FormStyle>
  )
}

export default Form

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`