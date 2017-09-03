import React from 'react'
import PropTypes from 'prop-types'

import { WizardFlowTemplate } from 'components'

import { GetMessage, CreateEditMessageForm } from 'containers'

const CreateEditMessagePage = ({ params, route }) => {
  return (
    <WizardFlowTemplate>
      {route.path === 'edit/:messageId' || route.path === 'confirm/:messageId' ? <GetMessage params={params} route={route} toRender={CreateEditMessageForm} /> : <CreateEditMessageForm params={params} route={route} />}
    </WizardFlowTemplate>
  )
}

CreateEditMessagePage.propTypes = {
  params: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

export default CreateEditMessagePage
