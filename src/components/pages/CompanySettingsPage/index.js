import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  Footer,
  Header,
  Heading,
  HorizontalRule,
  Paragraph,
  UtilityPageTemplate,
  UtilitySidebarNav,
} from 'components'

import { WelcomeMessageSettingsForm, AutoReplySettingsForm } from 'containers'

const sidebarValues = [
  {
    title: 'Welcome Message',
    description: 'Add a custom message for new subscribers',
    link: '/dashboard/settings/welcome-message',
  },
  {
    title: 'Auto-Reply',
    description: 'Add a message to automatically respond to replies',
    link: '/dashboard/settings/auto-reply',
  },
]

class CompanySettingsPage extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
  }

  render() {
    const { route } = this.props

    return (
      <UtilityPageTemplate
        footer={<Footer />}
        header={<Header />}
        sidebar={<UtilitySidebarNav list={sidebarValues} />}
      >
        <Card>
          <Heading level={2}>{route.path === 'welcome-message' ? 'Welcome Message' : 'Auto-Reply'}</Heading>
          <Paragraph>
            {route.path === 'welcome-message' ?
              'Add a custom message new subscribers will receive upon sign up.'
              :
              'Add a custom message to be sent automatically to any subscriber replies.'
            }
          </Paragraph>
          <HorizontalRule />
          {route.path === 'welcome-message' ?
            <WelcomeMessageSettingsForm />
          :
            <AutoReplySettingsForm />
          }
        </Card>
      </UtilityPageTemplate>
    )
  }
}

export default CompanySettingsPage
