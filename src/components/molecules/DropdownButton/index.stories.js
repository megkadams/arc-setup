import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { DropdownButton } from 'components'

storiesOf('DropdownButton', module)
  .add('default', () => (
    <DropdownButton />
  ))
