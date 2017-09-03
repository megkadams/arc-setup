import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import { colors } from 'components/variables'

const List = styled.ul`
  padding: 0;
  margin: 0 0 0 2rem;
  list-style: none;
  display: inline-block;
  li {
    display: inline-block;
    font-size: 1rem;
    a {
      color: ${colors.av_grey};
      width: 100%;
      height: 100%;
      padding: 0.5rem;
      text-decoration: none;
      transition: all 100ms ease-in-out;
    }
    &:first-child {
      a {
        padding-left: 0;
      }
    }
    &:last-child {
      a {
        padding-right: 0;
      }
    }
    &:hover {
      a {
        color: ${colors.av_black};
      }
    }
  }
`

const NavList = ({ ...props }) => {
  return (
    <List {...props}>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/dashboard/messages">Messages</Link></li>
      <li><Link to="/dashboard/subscribers">Subscribers</Link></li>
      <li><Link to="/dashboard/settings">Settings</Link></li>
    </List>
  )
}

export default NavList
