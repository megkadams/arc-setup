import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, global } from 'components/variables'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 6.5rem 2rem 0;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.av_ghost};
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${global.av_siteWidth};
`

const WizardFlowTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

WizardFlowTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default WizardFlowTemplate
