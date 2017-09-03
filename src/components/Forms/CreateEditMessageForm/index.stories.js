import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CreateEditMessageForm } from 'containers'

storiesOf('CreateEditMessageForm', module)
  .add('default', () => (
    <CreateEditMessageForm />
  ))
