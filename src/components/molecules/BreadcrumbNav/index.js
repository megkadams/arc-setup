import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styled from 'styled-components'
import { colors } from 'components/variables'

import { Icon } from 'components'

const List = styled.ul`
  padding: 0;
  margin: 2rem 0;
  list-style: none;
  display: block;
  width: 100%;
  li {
    display: inline-block;
    font-size: 1rem;
  }
`

const CurrentPage = styled.li`
  font-weight: 800;
  color: ${colors.av_black};
  a {
    color: ${colors.av_grey};
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    text-decoration: none;
  }
`

const Action = styled.li`
  display: inline-block;
  line-height: 1rem;
  color: ${colors.av_grey};
  text-decoration: none;
  padding: 0.5rem 0;
  a {
    margin: 0 1rem 0 0;
    padding: 0 1rem 0 0;
    border-right: 1px solid ${colors.av_grey};
    color: ${colors.av_grey};
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  svg {
    margin-top: -3px;
    height: 1.75rem;
  }
`

const BreadcrumbNav = ({ back, cancel, current, ...props }) => {
  return (
    <List {...props}>
      {back && <Action><Link to={back}><Icon fill={colors.av_grey} icon="back" size="1rem" /> Back</Link></Action>}
      {cancel && <Action><Link to={cancel}><Icon fill={colors.av_grey} icon="cancel" size="1rem" /> Cancel</Link></Action>}
      {current && <CurrentPage>{current}</CurrentPage>}
    </List>
  )
}

BreadcrumbNav.propTypes = {
  back: PropTypes.string,
  cancel: PropTypes.string,
  current: PropTypes.string,
}

export default BreadcrumbNav
