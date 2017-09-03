import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Employee } from 'components'

storiesOf('Employee', module)
  .add('default', () => (
    <Employee firstName="Mark" lastName="Spencer" phone="8164564578" />
  ))
