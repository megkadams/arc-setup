import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { colors } from 'components/variables'

import { Heading, Icon } from 'components'

const Wrapper = styled.div`
  display: block;
  width: 100%;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: ${colors.av_black};
    margin: 0 0 1rem;
  }
`

const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  li {
    display: inline-block;
    color: ${colors.av_grey};
  }
  li.active {
    color: ${colors.av_black};
    font-weight: bold;
  }
`

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: ${colors.av_ghost};
  border-bottom: 1px solid ${colors.av_silver};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    appearance: none;
    background: none;
    border: none;
    color: ${colors.av_grey};
    font-size: 1rem;
    padding: 1rem 0;
    cursor: pointer;
    &:active, &:focus {
      outline: none;
    }
  }
`

const linkStyles = css`
  display: inline-block;
  line-height: 1rem;
  color: ${colors.av_grey};
  text-decoration: none;
  padding: 1rem 0;
  svg {
    margin-top: -3px;
    height: 1.75rem;
  }
`

const StyledLink = styled(({ ...props }) =>
  <Link {...props} />
)`${linkStyles}`

const CreateEditMessageHeader = ({ params, route, ...props }) => {
  return (
    <Wrapper {...props}>
      <NavBar>
        {route.path === 'new' || route.path === 'edit/:messageId' ?
          <StyledLink to="/dashboard/messages"><Icon fill={colors.av_grey} icon="close" size="1rem" /> Cancel</StyledLink>
          :
          <StyledLink to={route.path === 'new/preview' ? '/dashboard/messages/new' : `/dashboard/messages/edit/${params.messageId}`}><Icon fill={colors.av_grey} icon="back" size="1rem" /> Back</StyledLink>
        }
        <button onClick={() => { console.log('clicked') }}>Save and Exit</button>
      </NavBar>
      <Heading level={2}>Create New Message</Heading>
      <Breadcrumbs>
        <li className={route.path === 'new' || route.path === 'edit/:messageId' ? 'active' : null}>Compose</li>
        <li>&nbsp;&mdash;&nbsp;</li>
        <li className={route.path === 'new/preview' || route.path === 'edit/:messageId/preview' ? 'active' : null}>Preview</li>
      </Breadcrumbs>
    </Wrapper>
  )
}

CreateEditMessageHeader.propTypes = {
  params: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

export default CreateEditMessageHeader
