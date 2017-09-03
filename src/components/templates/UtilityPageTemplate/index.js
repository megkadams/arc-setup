import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, global } from 'components/variables'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 7rem 2rem 0;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.av_ghost};
`

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 9999;
`

const Aside = styled.aside`
  width: 380px;
  margin-right: 2rem;
`

const Content = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  margin: 2rem auto;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: ${global.av_siteWidth};
  flex: 1;
`

const Body = styled.main`
  width: 508px;
  flex: 1;
  box-sizing: border-box;
`

const Footer = styled.footer`
  width: 100%;
  display: block;
`

const UtilityPageTemplate = ({ header, sidebar, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>
        {sidebar && <Aside>{sidebar}</Aside>}
        <Body>{children}</Body>
      </Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

UtilityPageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
  sidebar: PropTypes.node,
}

export default UtilityPageTemplate
