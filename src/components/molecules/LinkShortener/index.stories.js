import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { LinkShortener } from 'components'

storiesOf('LinkShortener', module)
  .add('default', () => (
    <LinkShortener />
  ))
