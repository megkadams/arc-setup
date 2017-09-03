import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

const Wrapper = styled.div`
  display: block;
  width: 100%;
  input[type=checkbox] {
    position: absolute;
    left: -9999999px;
  }
  input[type=checkbox]:checked + label {
    border-color: ${colors.av_ocean};
    box-shadow: 0 0 0 1px ${colors.av_ocean};
    cursor: default;
  }
  input[type=checkbox]:disabled + label {
    color: ${colors.av_silver};
    border-color: ${colors.av_silver};
    cursor: not-allowed;
  }
`

const FauxRadio = styled.label`
  display: block;
  height: 100%;
  padding: 1rem;
  border: 1px solid ${colors.av_silver};
  border-radius: 2px;
  color: ${colors.av_black};
  cursor: pointer;
  font-weight: normal;
  line-height: 1.25rem;
  &:hover {
    border-color: black;
    outline: none;
  }
`
const FieldDescription = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-top: 4px;
`

const FieldTitle = styled.span`
  display: block;
  font-size: 1rem;
`

const TitleDetail = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
`

const TextCheckbox = ({ checked, fieldDescription, fieldName, fieldTitle, handleCheck, style, titleDetail }) => {
  return (
    <Wrapper style={style || null}>
      <input
        type="checkbox"
        value={fieldName}
        id={fieldName}
        checked={checked || false}
        onChange={handleCheck}
      />
      <FauxRadio htmlFor={fieldName}>
        {fieldTitle && <FieldTitle>{fieldTitle}</FieldTitle>}
        {titleDetail && <TitleDetail>{titleDetail}</TitleDetail>}
        {fieldDescription && <FieldDescription>{fieldDescription}</FieldDescription>}
      </FauxRadio>
    </Wrapper>
  )
}

TextCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  fieldDescription: PropTypes.string,
  fieldName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  fieldTitle: PropTypes.string.isRequired,
  handleCheck: PropTypes.func,
  style: PropTypes.object,
  titleDetail: PropTypes.string,
}

export default TextCheckbox
