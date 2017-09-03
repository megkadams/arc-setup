import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AirportSearchForm } from 'containers'

storiesOf('AirportSearchForm', module)
  .add('default', () => (
    <AirportSearchForm />
  ))
