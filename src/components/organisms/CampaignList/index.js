import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Campaign } from 'components'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const CampaignList = ({ list, loading, ...props }) => {
  return (
    <List {...props}>
      {loading && <tr><td>Loading</td></tr>}
      {list.map((campaign) => <Campaign key={campaign.id} loading={loading} {...campaign} />)}
    </List>
  )
}

CampaignList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default CampaignList
