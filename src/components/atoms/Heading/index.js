// STEP14: More robust example (this includes styled-theme, which we're not using in our version). Lots of examples of atoms in the src-robust folder as well.

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

export const fontSize = ({ level, size }) => size || `${1 + (1 * (1 / level))}rem`

const styles = css`
  font-weight: 500;
  line-height: 1.25rem;
  font-size: ${fontSize};
  margin: 1rem 0 0;
  color: black;
`

const Heading = styled(({ level, children, size, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  size: PropTypes.string,
}

Heading.defaultProps = {
  level: 2,
  size: '1.5rem',
}

export default Heading
