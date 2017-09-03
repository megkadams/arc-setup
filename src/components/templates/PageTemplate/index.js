// STEP3: This template is extremely generic and likely would not be used in the wild -- see an example of a more robust template pasted below.
// Styled components remove mapping between components and styles (no more having to come up with generic names ('wrapper' vs 'container' etc)) -- learn more here: https://github.com/styled-components/styled-components and here: https://www.smashingmagazine.com/2017/01/styled-components-enforcing-best-practices-component-based-systems/
// NOTE: you CAN still put styles in the styles folder, we're just trying to extract as much as possible (forces modular thinking), so the styles folder will likely just hold a few global things, like reset and font import. In the styled components rule, you can write regular CSS. See note on variable usage here: https://github.com/styled-components/styled-components/issues/108#issuecomment-282347587
// Want more reasons why layouts? Remember our "can't remove the header or we lose auth" issue? Be gone! https://github.com/diegohaz/arc/issues/20#issuecomment-265934388

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

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 9999;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${global.av_siteWidth};
`

const PageTemplate = ({ children, header, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.node,
}

export default PageTemplate

// import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
//
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-top: 3.75rem;
//   min-height: 100vh;
//   box-sizing: border-box;
// `
//
// const Header = styled.header`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 999;
// `
//
// const Hero = styled.section``
//
// const Content = styled.section`
//   width: 100%;
//   box-sizing: border-box;
//   margin: 2rem auto;
//   max-width: 920px;
// `
//
// const Footer = styled.footer`
//   margin-top: auto;
// `
//
// const PageTemplate = ({ header, hero, children, footer, ...props }) => {
//   return (
//     <Wrapper {...props}>
//       <Header>{header}</Header>
//       {hero && <Hero>{hero}</Hero>}
//       <Content>{children}</Content>
//       <Footer>{footer}</Footer>
//     </Wrapper>
//   )
// }
//
// PageTemplate.propTypes = {
//   header: PropTypes.node.isRequired,
//   hero: PropTypes.node,
//   footer: PropTypes.node.isRequired,
//   children: PropTypes.any.isRequired,
// }
//
// export default PageTemplate
