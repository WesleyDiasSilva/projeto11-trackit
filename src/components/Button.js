import React from 'react'
import styled from 'styled-components'
import {STYLES} from '../constants/styles'
import { Comment } from "react-loader-spinner";

function Button (props ) {
  return (
    <ButtonStyle onClick={props.onClick} styles={STYLES.button}>
      {props.loading ? <Comment
          visible={true}
          height="50"
          width="150"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#52B6FF"
        /> 
        :
        props.children}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  width: 100%;
  height: 45px;
  border-radius: ${props => props.styles.borderRadius};
  border: none;
  background-color: ${props => props.styles.background};
  color: ${props => props.styles.color};
  font-family: ${props => props.styles.fontFamily};
  font-size: ${props => props.styles.fontSize};
  margin-bottom: 10px;
`