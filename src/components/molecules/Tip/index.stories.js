import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Tip } from 'components'

storiesOf('Tip', module)
  .add('default', () => (
    <Tip />
  ))
