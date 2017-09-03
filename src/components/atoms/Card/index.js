import PropTypes from 'prop-types'
import styled from 'styled-components'

export const width = ({ width }) => width || '100%'

const Card = styled.div`
  width: ${width};
  flex-basis: ${width};
  max-width: ${width};
  background: white;
  padding: 2rem;
  border-radius: 4px;
`

Card.propTypes = {
  width: PropTypes.string,
}

export default Card
