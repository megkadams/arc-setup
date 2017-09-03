import React from 'react'
import PropTypes from 'prop-types'

import { ConfirmationCard, Header, Footer, PageTemplate } from 'components'

import { GetMessage } from 'containers'

const ConfirmMessagePage = ({ params, route }) => {
  return (
    <PageTemplate footer={<Footer />} header={<Header />}>
      <GetMessage params={params} route={route} toRender={ConfirmationCard} />
    </PageTemplate>
  )
}

ConfirmMessagePage.propTypes = {
  params: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

export default ConfirmMessagePage
