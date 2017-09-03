import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon></Icon>
  ))
  .add('exampleProp', () => (
    <Icon exampleProp></Icon>
  ))
