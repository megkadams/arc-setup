import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

import { Label, Input, Password } from 'components'

const Error = styled.div`
  margin: 0.5rem 0 0;
`

const Wrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  label {
    vertical-align: middle;
  }
`

const Description = styled.span`
  display: block;
  color: ${colors.av_grey};
  font-size: 0.875rem;
  margin: 0;
`

const Field = ({ description, error, name, invalid, label, handleChange, style, type, ...props }) => {
  const inputProps = { id: name, name, type, invalid, handleChange, 'aria-describedby': `${name}Error`, ...props }
  return (
    <Wrapper style={style || null}>
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {description && <Description>{description}</Description>}
      {type === 'password' ?
        <Password {...inputProps} style={{ marginTop: '0.5rem' }} />
      :
        <Input {...inputProps} style={{ marginTop: '0.5rem' }} />
      }
      {invalid && error &&
        <Error id={`${name}Error`} role="alert">
          {error}
        </Error>
      }
    </Wrapper>
  )
}

Field.propTypes = {
  description: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  type: PropTypes.string,
}

Field.defaultProps = {
  type: 'text',
}

export default Field
