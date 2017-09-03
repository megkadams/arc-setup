import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { colors } from 'components/variables'

const styles = css`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: 0.875rem;
  padding: 12px;
  color: ${colors.av_black};
  background-color: white;
  border: 1px solid ${ifProp('invalid', 'red', colors.av_silver)};
  border-radius: 2px;
  &::-webkit-input-placeholder {
    color: ${colors.av_grey};
  }
  &::-moz-placeholder{
    color: ${colors.av_grey};
  }
  &:-ms-input-placeholder {
    color: ${colors.av_grey};
  }
  &:-moz-placeholder {
    color: ${colors.av_grey};
  }
  &:focus {
    outline: none;
  }
`

const StyledInput = styled.input`${styles}`

const Input = ({ ...props }) => {
  return <StyledInput {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  invalid: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
