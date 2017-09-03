import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Message } from 'components'

const List = styled.ul`
  margin: 2rem 0;
  padding: 0;
  list-style: none;
`

const MessagesList = ({ list, loading, ...props }) => {
  return (
    <List {...props}>
      {loading && <li>Loading</li>}
      {list.map((message) => <Message key={message.id} {...message} />)}
    </List>
  )
}

MessagesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default MessagesList
