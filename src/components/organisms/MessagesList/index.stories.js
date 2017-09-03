import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MessageOverview } from 'components'

const list = [
  { firstName: 'Mark', lastName: 'Spencer', phone: '8164564578' },
  { firstName: 'Billy', lastName: 'Joel', phone: '12312311111111111' },
  { firstName: 'Marie', lastName: 'Antoinette', phone: null },
  { firstName: 'Peter', lastName: 'Parker', phone: '8164564578' },
]

storiesOf('MessageOverview', module)
  .add('default', () => (
    <MessagesList list={list} />
  ))
  .add('loading', () => (
    <MessagesList list={[]} loading />
  ))
