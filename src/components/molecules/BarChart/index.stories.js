import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { BarChart } from 'components'

storiesOf('BarChart', module)
  .add('default', () => (
    <BarChart />
  ))
