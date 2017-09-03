import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Statistic } from 'components'

storiesOf('Statistic', module)
  .add('default', () => (
    <Statistic firstName="Mark" lastName="Spencer" phone="8164564578" />
  ))
