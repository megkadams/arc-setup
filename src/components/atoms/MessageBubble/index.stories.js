import React from 'react'
import { storiesOf } from '@kadira/storybook'
import MessageBubble from '.'

storiesOf('MessageBubble', module)
  .add('default', () => (
    <MessageBubble>Hello</MessageBubble>
  ))
