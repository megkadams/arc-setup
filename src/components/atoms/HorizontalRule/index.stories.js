import React from 'react'
import { storiesOf } from '@kadira/storybook'
import HorizontalRule from '.'

storiesOf('HorizontalRule', module)
  .add('default', () => (
    <HorizontalRule>Hello</HorizontalRule>
  ))
