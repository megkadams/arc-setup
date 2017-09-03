import { initialState } from './selectors'
import { MESSAGE_CREATE_SUCCESS, MESSAGE_LIST_READ_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_CREATE_SUCCESS:
      return {
        ...state,
        list: [action.detail, ...state.list],
      }
    case MESSAGE_LIST_READ_SUCCESS:
      return {
        ...state,
        list: action.list,
      }
    default:
      return state
  }
}
