import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { ifProp } from 'styled-tools'
import { colors } from 'components/variables'

const backgroundColor = ({ backgroundColor, disabled, outline }) => {
  if (disabled) {
    return colors.av_silver
  } else if (backgroundColor === 'brand') {
    return '#efbd49'
  } else if (outline) {
    return 'white'
  } else if (backgroundColor) {
    return backgroundColor
  }

  return colors.av_teal
}

const foregroundColor = ({ foregroundColor, disabled, outline }) => {
  if (disabled) {
    return colors.av_grey
  } else if (foregroundColor === 'brand') {
    return '#efbd49'
  } else if (outline) {
    return colors.av_teal
  } else if (foregroundColor) {
    return foregroundColor
  }

  return 'white'
}

const hoverBackgroundColor = ({ backgroundColor, hoverBackgroundColor, disabled }) => {
  if (disabled) {
    return colors.av_silver
  } else if (backgroundColor === 'brand') {
    return '#efbd49'
  } else if (hoverBackgroundColor) {
    return hoverBackgroundColor
  }

  return colors.av_dkteal
}

const hoverForegroundColor = ({ disabled }) => {
  if (disabled) {
    return colors.av_grey
  }

  return 'white'
}

const styles = css`
  display: ${ifProp('block', 'block', 'inline-flex')};
  width: ${ifProp('block', '100%', 'auto')};
  font-weight: bold;
  align-items: center;
  white-space: nowrap;
  font-size: 1rem;
  border: 0.0625em solid ${colors.av_teal};
  border-color: ${ifProp('outline', colors.av_teal, backgroundColor)};
  justify-content: center;
  text-align: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  appearance: none;
  padding: 12px;
  box-sizing: border-box;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${foregroundColor};

  &:hover, &:focus, &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }

  &:focus {
    outline: none
  }
`

const StyledLink = styled(({ backgroundColor, block, disabled, foregroundColor, outline, ...props }) =>
  <Link {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } else if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  foregroundColor: PropTypes.string,
  height: PropTypes.number,
  href: PropTypes.string,
  outline: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
