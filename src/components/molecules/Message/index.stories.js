import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Message } from 'components'

storiesOf('Message', module)
  .add('default', () => (
    <Message firstName="Mark" lastName="Spencer" phone="8164564578" />
  ))
