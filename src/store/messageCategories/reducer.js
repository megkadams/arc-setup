import { initialState } from './selectors'
import { MESSAGE_CATEGORY_COUNT_READ_SUCCESS, MESSAGE_CATEGORIES_READ_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_CATEGORY_COUNT_READ_SUCCESS:
      return {
        ...state,
        subscribeCount: action.data,
      }
    case MESSAGE_CATEGORIES_READ_SUCCESS:
      return {
        ...state,
        list: action.list,
      }
    default:
      return state
  }
}
