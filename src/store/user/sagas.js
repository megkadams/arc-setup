import { take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'

export function* calculateDistance(passwords) {
  try {
    const data = yield call(api.get, '/json?query=UnitedStates&type=airport&key=AIzaSyCNOOSvcOfgb1ym4z8ASSkfN2gT_Sioqr8')
    yield put(actions.calculateAirportDistanceSuccess(data))
    // const data = yield call(api.put, '/password', passwords)
    // yield put(actions.updatePasswordSuccess(data))
  } catch (e) {
    console.log(2);
    yield put(actions.calculateAirportDistanceFailure(e))
  }
}
// export function* readGetUser() {
//   try {
//     const data = yield call(api.get, '/user')
//     yield put(actions.getUserRequestSuccess(data))
//   } catch (e) {
//     yield put(push('/login'))
//     // yield put(actions.getUserRequestFailure(e))
//   }
// }

export function* watchCalculateDistanceRequest() {
  while (true) {
    const { data } = yield take(actions.CALCULATE_DISTANCE_REQUEST)
    yield call(calculateDistance, data)
  }
}
// export function* watchUserGetRequest() {
//   while (true) {
//     const { params } = yield take(actions.USER_GET_REQUEST)
//     yield call(readGetUser, params)
//   }
// }

export default function* () {
  yield fork(watchCalculateDistanceRequest)
  // yield fork(watchUserGetRequest)
}
