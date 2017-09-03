import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AccountSettingsForm } from 'containers'

storiesOf('AccountSettingsForm', module)
  .add('default', () => (
    <AccountSettingsForm />
  ))
