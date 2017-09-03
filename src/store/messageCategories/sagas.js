import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

export function* readMessageCategories() {
  try {
    const data = yield call(api.get, '/message-categories')
    yield put(actions.messageCategoriesReadSuccess(data))
  } catch (e) {
    yield put(actions.messageCategoriesReadFailure(e))
  }
}
export function* readMessageCategoryCount(messageCats) {
  try {
    if (messageCats.length > 0) {
      const stringifyCats = messageCats.reduce((paramString, cat) => {
        return paramString.concat(`${parseInt(cat, 10)},`)
      }, '').replace(/,\s*$/, '')
      const data = yield call(api.get, `/subscriber-count?messageCategories=${stringifyCats}`)
      yield put(actions.messageCategoryCountSuccess(data))
    } else {
      yield put(actions.messageCategoryCountSuccess(0))
    }
  } catch (e) {
    yield put(actions.messageCategoryCountFailure(e))
  }
}

export function* watchMessageCategoriesReadRequest() {
  while (true) {
    const { params } = yield take(actions.MESSAGE_CATEGORIES_READ_REQUEST)
    yield call(readMessageCategories, params)
  }
}
export function* watchCategoryCountRequest() {
  while (true) {
    const { messageCats } = yield take(actions.MESSAGE_CATEGORY_COUNT_READ_REQUEST)
    yield call(readMessageCategoryCount, messageCats)
  }
}


export default function* () {
  yield fork(watchMessageCategoriesReadRequest)
  yield fork(watchCategoryCountRequest)
}
