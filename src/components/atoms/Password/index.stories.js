import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Password from '.'

storiesOf('Password', module)
  .add('default', () => (
    <Password />
  ))
  .add('height', () => (
    <Password height={100} />
  ))
  .add('invalid', () => (
    <Password invalid />
  ))
