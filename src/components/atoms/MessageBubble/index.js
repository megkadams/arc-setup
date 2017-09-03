import styled from 'styled-components'
import { colors } from 'components/variables'

const MessageBubble = styled.p`
  background-color: ${colors.av_ghost};
  border-radius: 1.25rem;
  border-bottom-left-radius: 0;
  padding: 1rem;
  margin: 1rem 0 0;
  font-size: 14px;
  line-height: 1.25rem;
  code {
    background: #fef0f2;
    color: $ferror;
    border: solid 1px #f9abb4;
    padding: 0 4px;
    font-size: 0.875rem;
  }
`

export default MessageBubble
