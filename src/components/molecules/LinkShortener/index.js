import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

import { Button, Input } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-color: ${colors.av_silver};
    border-left: none;
  }
`

const LinkShortener = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <Input placeholder="Paste a link to shorten it" />
      <Button type="button">Shorten</Button>
    </Wrapper>
  )
}
export default LinkShortener
