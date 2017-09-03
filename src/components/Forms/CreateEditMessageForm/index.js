import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

import {
  Button,
  Card,
  Field,
  Heading,
  Label,
  LinkShortener,
  Paragraph,
  TextAreaField,
  TextCheckbox,
} from 'components'

import { numberWithCommas } from 'components/utils'

const Form = styled.form`
  width: 100%;
  h4 {
    margin: 0 0 2rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
`

const Half = styled.div`
  width: 100%;
  max-width: calc(50% - 0.5rem);
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
  > div {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
`

const TriFlexWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 1rem;
  > div {
    margin-right: 1rem;
    max-width: calc(33.333333% - .666666667rem);
    &:last-child {
      margin-right: 0;
    }
  }
`

const GroupLabelWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  label {
    vertical-align: middle;
  }
`
const GroupLabelDescription = styled.span`
  display: block;
  color: ${colors.av_grey};
  font-size: 0.875rem;
  margin: 0;
`

const LinkShortenWrapper = styled.span`
  margin-top: 48px;
  background: ${colors.av_ghost};
  padding: 1rem;
  width: 50%;
`

const CreateEditMessageForm = ({ handleCategoryChange, handleChange, handleSubmit, formData, messageCategories, params }) => {
  return (
    <Card style={{ margin: '4rem 0' }}>
      <Form onSubmit={handleSubmit}>
        <Heading level={4}>Compose</Heading>
        <Half>
          <Field
            description="Internal use only, ex: 'Spring 2017 Semi-Annual Sale'"
            label="Message Name"
            name="name"
            onChange={handleChange}
            type="text"
            value={formData.name}
          />
        </Half>
        <GroupLabelWrapper>
          <Label>Message Type</Label>
          <GroupLabelDescription>Select one or multiple message types.</GroupLabelDescription>
        </GroupLabelWrapper>
        <TriFlexWrapper>
          {messageCategories.map((cat) => {
            return (
              <TextCheckbox
                checked={formData.categories.includes(cat.id.toString())}
                fieldName={cat.id.toString()}
                fieldTitle={cat.title}
                fieldDescription={cat.description}
                handleCheck={handleCategoryChange}
                key={cat.id}
                titleDetail={cat.subscribers === 1 ? '1 Subscriber' : `${numberWithCommas(cat.subscribers)} Subscribers`}
              />
            )
          })}
        </TriFlexWrapper>
        <Paragraph style={{ fontWeight: '500', marginBottom: '2rem' }}>{formData.subscribers} Recipients</Paragraph>
        <FlexWrapper>
          <TextAreaField
            charCount={160}
            description="How the mesage will appear to recipients."
            label="Message Text"
            name="text"
            onChange={handleChange}
            style={{ width: '50%', marginBottom: '0px' }}
            value={formData.text}
          />
          <LinkShortenWrapper>
            <Paragraph style={{ marginTop: '0px', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.875rem' }}>Shorten a Link</Paragraph>
            <LinkShortener />
          </LinkShortenWrapper>
        </FlexWrapper>
        <Half>
          <Button
            block
            to={params.messageId ? `/dashboard/messages/edit/${params.messageId}/preview` : '/dashboard/messages/new/preview'}
          >Preview Message
          </Button>
        </Half>
      </Form>
    </Card>
  )
}

CreateEditMessageForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  messageCategories: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
}

export default CreateEditMessageForm
