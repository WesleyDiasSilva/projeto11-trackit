import React from 'react'
import styled from 'styled-components'

function SubtitleForPage({children}) {
  return (
    <Subtitle>
      {children}
    </Subtitle>
  )
}

export default SubtitleForPage

const Subtitle = styled.span`
  margin-top: 120px;
`