import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { BreadcrumbNav } from 'components'

storiesOf('BreadcrumbNav', module)
  .add('default', () => (
    <BreadcrumbNav name="field" />
  ))
  .add('with label', () => (
    <BreadcrumbNav name="field" label="Label" />
  ))
