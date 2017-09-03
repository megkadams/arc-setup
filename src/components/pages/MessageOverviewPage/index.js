import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer, PageTemplate } from 'components'
import { MessageOverview } from 'containers'

const MessageOverviewPage = ({ params }) => {
  return (
    <PageTemplate footer={<Footer />} header={<Header />}>
      <MessageOverview params={params} />
    </PageTemplate>
  )
}

MessageOverviewPage.propTypes = {
  params: PropTypes.object.isRequired,
}

export default MessageOverviewPage
