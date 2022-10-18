import React from 'react'
import styled from 'styled-components'
import {STYLES} from '../constants/styles'

function Input({type, placeholder}) {
  return (
    <InputStyle styles={STYLES.input} type={type} placeholder={placeholder}/>
  )
}

export default Input

const InputStyle = styled.input`
  width: 303px;
  height: 45px;
  border-radius: 5px;
  border: solid 1px #D4D4D4;
  &::placeholder{
    color: #DBDBDB;
    font-family: sans-serif;
    font-size: 19px;
    padding: 10px;
  }
`