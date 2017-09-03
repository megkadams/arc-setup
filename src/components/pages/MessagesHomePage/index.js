import React from 'react'

import { Header, Footer, PageTemplate } from 'components'
import { MessagesList } from 'containers'

const MessagesHomePage = () => {
  return (
    <PageTemplate footer={<Footer />} header={<Header />}>
      <div>
        <MessagesList />
      </div>
    </PageTemplate>
  )
}

export default MessagesHomePage
