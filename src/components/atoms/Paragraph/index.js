import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

export const fontSize = ({ size }) => size || '1rem'
export const fontColor = ({ color }) => color || colors.av_black

const Paragraph = styled.p`
  color: ${fontColor};
  font-size: ${fontSize};
  line-height: 1.25rem;
  margin: 1rem 0 0;
`

Paragraph.propTypes = {
  size: PropTypes.string,
}

export default Paragraph
