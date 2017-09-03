import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0 auto;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <p>Lorem ispum footer</p>
    </Wrapper>
  )
}

export default Footer
