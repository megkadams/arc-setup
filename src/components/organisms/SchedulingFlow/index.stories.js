import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SchedulingFlow } from 'components'

storiesOf('SchedulingFlow', module)
  .add('default', () => (
    <SchedulingFlow />
  ))
