import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AutoReplySettingsForm } from 'containers'

storiesOf('AutoReplySettingsForm', module)
  .add('default', () => (
    <AutoReplySettingsForm />
  ))
