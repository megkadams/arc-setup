import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MessageHeader } from 'components'

storiesOf('MessageHeader', module)
  .add('default', () => (
    <MessageHeader firstName="Mark" lastName="Spencer" phone="8164564578" />
  ))
