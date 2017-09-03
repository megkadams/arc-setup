import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

export function* createCampaign(newData) {
  try {
    const data = yield call(api.post, '/campaigns', newData)
    yield put(actions.campaignCreateSuccess(data))
  } catch (e) {
    yield put(actions.campaignCreateFailure(e))
  }
}

// export function* readCampaignList() {
//   try {
//     const data = yield call(api.get, '/campaigns')
//     yield put(actions.campaignListReadSuccess(data))
//   } catch (e) {
//     yield put(actions.campaignListReadFailure(e))
//   }
// }

export function* watchCampaignCreateRequest() {
  while (true) {
    const { data } = yield take(actions.CAMPAIGN_CREATE_REQUEST)
    yield call(createCampaign, data)
  }
}

// export function* watchCampaignListReadRequest() {
//   while (true) {
//     const { params } = yield take(actions.CAMPAIGN_LIST_READ_REQUEST)
//     yield call(readCampaignList, params)
//   }
// }

export default function* () {
  yield fork(watchCampaignCreateRequest)
  // yield fork(watchCampaignListReadRequest)
}
