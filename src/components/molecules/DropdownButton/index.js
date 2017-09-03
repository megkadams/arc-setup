import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import { colors } from 'components/variables'

import { Button } from 'components'

const Wrapper = styled.div`
  display: inline-block;
  width: auto;
  position: relative;
`

const Dropdown = styled.ul`
  display: none;
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);
  width: 182px;
  li {
    display: block;
    font-size: 0.875rem;
    background: white;
    a, &.action {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0.5rem 1rem;
      color: ${colors.av_grey};
      text-decoration: none;
      cursor: pointer;
    }
    &:first-child {
      a, &.action {
        padding-top: 1rem;
      }
    }
    &:last-child {
      a, &.action {
        padding-bottom: 1rem;
      }
    }
    &:hover {
      background: ${colors.av_ghost}
    }
  }
`

class DropdownButton extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    buttonStyle: PropTypes.object,
    buttonValue: PropTypes.string.isRequired,
    dropdownOptions: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string,
      type: PropTypes.string.isRequired,
    })).isRequired,
    foregroundColor: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      expanded: false,
    }
  }

  handleClickOutside = () => {
    this.state = {
      expanded: false,
    }
  }

  dropdownLink = (link) => {
    if (link.type === 'LINK') {
      return (
        <li
          key={link.name}
          onClick={this.toggleDropdown}
        ><Link to={link.to}>{link.name}</Link>
        </li>
      )
    } else if (link.type === 'ACTION') {
      if (link.action.on === 'click') {
        return (
          <li
            className="action"
            key={link.name}
            onClick={link.action.do}
          >{link.name}
          </li>
        )
      }
    }

    return (
      <li className="action" key={link.name}>{link.name}</li>
    )
  }

  toggleDropdown = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    const {
      backgroundColor,
      buttonStyle,
      buttonValue,
      dropdownOptions,
      foregroundColor,
      style,
    } = this.props

    return (
      <Wrapper style={style || null}>
        <Button
          backgroundColor={backgroundColor || null}
          foregroundColor={foregroundColor || null}
          onClick={this.toggleDropdown}
          style={buttonStyle || null}
          type="button"
        >{buttonValue}
        </Button>
        <Dropdown style={this.state.expanded ? { display: 'block' } : { display: 'none' }}>
          {dropdownOptions.map((link) => this.dropdownLink(link))}
        </Dropdown>
      </Wrapper>
    )
  }
}

export default onClickOutside(DropdownButton)
