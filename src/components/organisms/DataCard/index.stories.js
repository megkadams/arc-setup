import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { DataCard } from 'components'

storiesOf('DataCard', module)
  .add('default', () => (
    <DataCard />
  ))
