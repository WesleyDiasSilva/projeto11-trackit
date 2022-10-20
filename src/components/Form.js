import React from 'react'
import styled from 'styled-components'



function Form(props) {
  return (
    <FormStyle onSubmit={(e) => e.preventDefault()}> 
      {props.children}
    </FormStyle>
  )
}

export default Form

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`