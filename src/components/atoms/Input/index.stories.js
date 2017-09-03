import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Input from '.'

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('height', () => (
    <Input height={100} />
  ))
  .add('invalid', () => (
    <Input invalid />
  ))
