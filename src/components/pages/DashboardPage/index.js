import React from 'react'

import { Header, Footer, PageTemplate } from 'components'
import { Dashboard } from 'containers'

const DashboardPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Dashboard />
    </PageTemplate>
  )
}

export default DashboardPage
