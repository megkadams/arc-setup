import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  Footer,
  Header,
  Heading,
  HorizontalRule,
  UtilityPageTemplate,
  UtilitySidebarNav,
} from 'components'

import { AccountSettingsForm, PasswordSettingsForm } from 'containers'

const sidebarValues = [
  {
    title: 'Profile',
    description: 'Name, email, etc.',
    link: '/dashboard/account/details',
  },
  {
    title: 'Password',
    description: 'Change your password',
    link: '/dashboard/account/password',
  },
]

class AccountSettingsPage extends Component {
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
          <Heading level={2}>{route.path === 'password' ? 'Password' : 'Profile'}</Heading>
          <HorizontalRule />
          {route.path === 'password' ?
            <PasswordSettingsForm />
          :
            <AccountSettingsForm />
          }
        </Card>
      </UtilityPageTemplate>
    )
  }
}

export default AccountSettingsPage
