import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

import { Icon } from 'components'

const Wrapper = styled.header`
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  font-weight: 500;
  color: ${colors.av_black};
  svg {
    cursor: pointer;
  }
  button {
    appearance: none;
    background: none;
    border: none;
    padding: 0;
    &:focus, &:active {
      outline: none;
    }
  }
`

const CalendarHeader = ({ decrementMonth, incrementMonth, monthYear }) => {
  return (
    <Wrapper className="header">
      <button onClick={decrementMonth}>
        <Icon icon="chevron-left" size="1.25rem" />
      </button>
      <span>{monthYear}</span>
      <button onClick={incrementMonth}>
        <Icon icon="chevron-right" size="1.25rem" />
      </button>
    </Wrapper>
  )
}

CalendarHeader.propTypes = {
  decrementMonth: PropTypes.func.isRequired,
  incrementMonth: PropTypes.func.isRequired,
  monthYear: PropTypes.string.isRequired,
}

export default CalendarHeader
