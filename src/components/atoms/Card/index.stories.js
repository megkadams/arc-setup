import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Card from '.'

storiesOf('Card', module)
  .add('default', () => (
    <Card>Hello</Card>
  ))
