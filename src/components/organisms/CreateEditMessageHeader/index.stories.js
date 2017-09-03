import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CreateEditMessageHeader } from 'components'

const list = [
  { firstName: 'Mark', lastName: 'Spencer', phone: '8164564578' },
  { firstName: 'Billy', lastName: 'Joel', phone: '12312311111111111' },
  { firstName: 'Marie', lastName: 'Antoinette', phone: null },
  { firstName: 'Peter', lastName: 'Parker', phone: '8164564578' },
]

storiesOf('CreateEditMessageHeader', module)
  .add('default', () => (
    <CreateEditMessageHeader list={list} />
  ))
  .add('loading', () => (
    <CreateEditMessageHeader list={[]} loading />
  ))
