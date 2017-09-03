import React from 'react'

import { Header, Footer, PageTemplate } from 'components'
import { Dashboard } from 'containers'

const SubscribersPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Dashboard />
    </PageTemplate>
  )
}

export default SubscribersPage
