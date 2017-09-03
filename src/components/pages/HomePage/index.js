import React from 'react'
import { Card, Heading, PageTemplate, Paragraph } from 'components'
import { AirportSearchForm } from 'containers'
// formerly PasswordSettingsForm TODO TODO

const HomePage = () => {
  return (
    <PageTemplate>
      <Card width="444px" style={{ margin: '0px auto' }}>
        <Heading level={1} style={{ textAlign: 'center', margin: '0px auto 1rem' }}>Airport Distance Magic Machine</Heading>
        <Paragraph style={{ textAlign: 'center', margin: '0px auto 3.75rem' }}>Blah blah blah do stuff</Paragraph>
        <AirportSearchForm />
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      </Card>
    </PageTemplate>
  )
}

export default HomePage
