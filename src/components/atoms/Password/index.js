import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { colors } from 'components/variables'
import { Icon } from 'components'

const Wrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    right: 1rem;
    top: calc(50% - 0.75rem);
  }
`

const IconWrapper = styled.span`
  width: calc(1.5rem + 2rem);
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  display: block;
`

const styles = css`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: 0.875rem;
  padding: 12px 3.5rem 12px 12px;
  color: ${colors.av_black};
  background-color: white;
  border: 1px solid ${ifProp('invalid', 'red', colors.av_silver)};
  border-radius: 2px;
  &::-webkit-input-placeholder {
    color: ${colors.av_grey};
  }
  &::-moz-placeholder{
    color: ${colors.av_grey};
  }
  &:-ms-input-placeholder {
    color: ${colors.av_grey};
  }
  &:-moz-placeholder {
    color: ${colors.av_grey};
  }
  &:focus {
    outline: none;
  }
`

const StyledInput = styled.input`${styles}`

class Password extends Component {
  static propTypes = {
    invalid: PropTypes.bool,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      visiblePassword: false,
    }
  }

  hidePassword = () => {
    this.setState({
      visiblePassword: !this.state.visiblePassword,
    })
  }

  toggleVisible = () => {
    this.setState({
      visiblePassword: !this.state.visiblePassword,
    })
    this.forceUpdate()
  }

  render() {
    const { visiblePassword } = this.state
    return (
      <Wrapper>
        {visiblePassword ?
          <StyledInput type="text" {...this.props} />
        :
          <StyledInput type="password" {...this.props} />
        }
        <IconWrapper onClick={this.toggleVisible}>
          {visiblePassword ? <Icon size="1.5rem" icon="eyeclosed" fill={colors.av_grey} /> : <Icon size="1.5rem" icon="eyeopen" fill={colors.av_grey} />}
        </IconWrapper>
      </Wrapper>
    )
  }
}

export default Password
