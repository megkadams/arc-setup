import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

import { Paragraph } from 'components'

const Wrapper = styled.div`
  background: ${colors.av_ghost};
  display: block;
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  p {
    margin: 0;
    font-size: 0.875rem;
  }
`

const Tip = ({ body, ...props }) => {
  return (
    <Wrapper {...props}>
      <Paragraph><strong>Tip: </strong>{body}</Paragraph>
    </Wrapper>
  )
}

Tip.propTypes = {
  body: PropTypes.string.isRequired,
}

export default Tip
