import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router'
import { Heading, Paragraph } from 'components'
import { colors } from 'components/variables'

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    display: block;
    width: 100%;
  }
  a {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    background: ${colors.av_ghost};
    padding: 1rem;
    &:hover, &.active {
      background: ${colors.av_smoke};
    }
  }
  h6 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`

const NavList = ({ list, ...props }) => {
  return (
    <List {...props}>
      {list.map((navItem) => {
        return (
          <li key={navItem.title}>
            <Link to={navItem.link} activeClassName="active">
              <Heading level={6} size="1rem">{navItem.title}</Heading>
              <Paragraph color={colors.av_grey} size="0.875rem">{navItem.description}</Paragraph>
            </Link>
          </li>
        )
      })}
    </List>
  )
}

NavList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default NavList
