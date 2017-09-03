import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { CreateEditMessagePreview } from 'containers'

storiesOf('CreateEditMessagePreview', module)
  .add('default', () => (
    <CreateEditMessagePreview />
  ))
