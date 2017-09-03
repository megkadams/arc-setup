import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from 'store/actions'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import styled from 'styled-components'
import { Button, DropdownButton, Icon, Heading, NavList } from 'components'
import { colors } from 'components/variables'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 auto;
  .home-link {
    width: auto;
    display: inline-flex;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
  }
  h1 {
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    color: ${colors.av_black};
    margin: 0 0 0 1rem;
    border-left: 1px solid ${colors.av_brand};
    padding-left: 1rem;
  }
`

class Header extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  logout = () => {
    this.props.logout()
    push('/login')
  }

  render() {
    const accountDropdownOptions = [
      {
        name: 'Profile',
        to: '/dashboard/account/details',
        type: 'LINK',
      },
      {
        action: {
          do: this.logout,
          on: 'click',
        },
        name: 'Sign Out',
        type: 'ACTION',
      },
    ]

    return (
      <Wrapper>
        <span>
          <Link className="home-link" to="/dashboard">
            <Icon fill={colors.av_brand} icon="logo" size="0.875rem" />
            <Heading level={1}>Siren Song</Heading>
          </Link>
          <NavList />
        </span>
        <span>
          <Button
            backgroundColor="brand"
            style={{ height: '40px' }}
            to="/dashboard/messages/new"
          >Create Message
          </Button>
          <DropdownButton
            backgroundColor="rgba(239, 189, 73, 0.3)"
            buttonValue="E"
            buttonStyle={{ height: '40px', marginLeft: '0.5rem', width: '40px' }}
            dropdownOptions={accountDropdownOptions}
            foregroundColor="#efbd49"
          />
        </span>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(Header)
