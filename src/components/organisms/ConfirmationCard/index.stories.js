import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ConfirmationCard } from 'components'

storiesOf('ConfirmationCard', module)
  .add('default', () => (
    <ConfirmationCard />
  ))
