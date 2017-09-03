import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

// export function* createMessage(newData) {
//   try {
//     const data = yield call(api.message, '/messages', newData)
//     yield put(actions.messageCreateSuccess(data))
//   } catch (e) {
//     yield put(actions.messageCreateFailure(e))
//   }
// }

// this had params, refer back to original if need assist
export function* readMessageList() {
  try {
    const data = yield call(api.get, '/messages')
    yield put(actions.messageListReadSuccess(data))
  } catch (e) {
    yield put(actions.messageListReadFailure(e))
  }
}

// export function* watchMessageCreateRequest() {
//   while (true) {
//     const { data } = yield take(actions.MESSAGE_CREATE_REQUEST)
//     yield call(createMessage, data)
//   }
// }

export function* watchMessageListReadRequest() {
  while (true) {
    const { params } = yield take(actions.MESSAGE_LIST_READ_REQUEST)
    yield call(readMessageList, params)
  }
}

export default function* () {
  // yield fork(watchMessageCreateRequest)
  yield fork(watchMessageListReadRequest)
}
