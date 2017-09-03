import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

import { Label } from 'components'

const Wrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  label {
    vertical-align: middle;
  }
`

const CharCountWrapper = styled.div`
  position: relative;
  width: 100%;
`

const CharCount = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: ${colors.av_grey};
  font-size: .75rem;
  line-height: 1;
  &.invalid {
    color: ${colors.av_brand};
  }
`

const Description = styled.span`
  display: block;
  color: ${colors.av_grey};
  font-size: 0.875rem;
  margin: 0;
`

const TextArea = styled.textarea`
  transition: border-color .25s;
  display: block;
  width: 100%;
  color: ${colors.av_black};
  border: 1px solid ${colors.av_silver};
  outline: none;
  border-radius: 2px;
  background: white;
  padding: 1rem;
  resize: none;
  &:focus {
    border: 1px solid ${colors.av_ocean};
  }
`

const TextAreaField = ({ charCount, description, error, name, invalid, label, handleChange, rows, style, value, ...props }) => {
  const inputProps = { id: name, name, invalid, handleChange, 'aria-describedby': `${name}Error`, rows, value, ...props }
  return (
    <Wrapper style={style || null}>
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {description && <Description>{description}</Description>}
      <CharCountWrapper>
        <TextArea {...inputProps} style={{ marginTop: '0.5rem' }} />
        {charCount && <CharCount className={charCount - value.length < 0 && 'invalid'}>{charCount - value.length}</CharCount>}
      </CharCountWrapper>
    </Wrapper>
  )
}

TextAreaField.propTypes = {
  charCount: PropTypes.number,
  description: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.string,
}

TextAreaField.defaultProps = {
  rows: 5,
  value: '',
}

export default TextAreaField
