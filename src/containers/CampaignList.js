import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { fromEntities, fromCampaign, fromStatus } from 'store/selectors'
// import { campaignListReadRequest, CAMPAIGN_LIST_READ } from 'store/actions'

import { CampaignList } from 'components'

class CampaignListContainer extends Component {
  // static propTypes = {
  //   list: PropTypes.arrayOf(PropTypes.object).isRequired,
  //   loading: PropTypes.bool,
  //   request: PropTypes.func.isRequired,
  // }

  // constructor(props, context) {
  //   super(props, context)
  //   props.request()
  // }

  render() {
    const fakeList = [
      {
        id: 123,
        title: 'My First Campaign',
        type: 0,
        author: 'Andrew Thompson',
        messages: [
          { id: 0, title: 'Default Message', body: 'This is my message to anyone missing data' },
          { id: 1, title: 'Group One', body: 'This is my message to group one!' },
          { id: 2, title: 'Group Two', body: 'This is my message to group two~~~~!' },
        ],
      },
      {
        id: 456,
        title: 'Get the new spring collection in stores today',
        type: 1,
        author: 'Kevin Rigby',
        messages: [
          { id: 0, title: 'Default Message', body: 'This is my message to anyone missing data' },
          { id: 1, title: 'Group One', body: 'This is my message to group one!' },
          { id: 2, title: 'Group Two', body: 'Tell me what you want, what you really really want' },
          { id: 3, title: 'Group Three', body: 'This is my message to group three~~~~!' },
          { id: 4, title: 'Peeps', body: 'Hey, what is up, hello' },
        ],
      },
      {
        id: 789,
        title: 'DEALZDEALZDEALZ',
        type: 1,
        author: 'Kristin Dunn',
        messages: [
          { id: 0, title: 'Default Message', body: 'This is my message to anyone who does not have a complete profile' },
          { id: 1, title: 'People who like dealz', body: 'Hello, {firstName}, there are neat sales online in {state}' },
        ],
      },
    ]

    const { list, loading } = this.props
    // return <CampaignList {...{ list, loading }} />
    return <CampaignList list={fakeList} />
  }
}

// const mapStateToProps = (state) => ({
//   list: fromEntities.getList(state, 'campaign', fromCampaign.getList(state)),
//   loading: fromStatus.isLoading(state, CAMPAIGN_LIST_READ),
// })
//
// const mapDispatchToProps = (dispatch) => ({
//   request: () => dispatch(campaignListReadRequest()),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CampaignListContainer)
export default connect()(CampaignListContainer)
