import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TextAreaField } from 'components'

storiesOf('TextAreaField', module)
  .add('default', () => (
    <TextAreaField name="field" />
  ))
  .add('with label', () => (
    <TextAreaField name="field" label="Label" />
  ))
  .add('invalid', () => (
    <TextAreaField name="field" label="Label" invalid />
  ))
