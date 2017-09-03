import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { push } from 'react-router-redux'
import * as actions from './actions'

export function* readMessage(messageId) {
  try {
    const data = yield call(api.get, `/messages/${messageId}`)
    yield put(actions.messageReadSuccess(data))
  } catch (e) {
    yield put(actions.messageReadFailure(e))
  }
}
export function* saveMessage(newMessage) {
  try {
    const data = yield call(api.post, '/messages', newMessage)
    yield put(actions.saveMessageSuccess(data))
    yield put(push(`/dashboard/messages/confirm/${data.id}`))
  } catch (e) {
    yield put(actions.saveMessageFailure(e))
  }
}


export function* watchMessageReadRequest() {
  while (true) {
    const { messageId } = yield take(actions.MESSAGE_READ_REQUEST)
    yield call(readMessage, messageId)
  }
}
export function* watchMessageSaveRequest() {
  while (true) {
    const { data } = yield take(actions.MESSAGE_SAVE_REQUEST)
    yield call(saveMessage, data)
  }
}


export default function* () {
  yield fork(watchMessageReadRequest)
  yield fork(watchMessageSaveRequest)
}
