import React from 'react'

import { Header, PageTemplate } from 'components'
import { CampaignForm, CampaignList } from 'containers'

const CampaignHomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <div>
        <h2>Campaign Dashboard</h2>
        <CampaignForm />
        <CampaignList />
      </div>
    </PageTemplate>
  )
}

export default CampaignHomePage
