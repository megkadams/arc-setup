import { initialState } from './selectors'
import { MESSAGE_CLEAR, MESSAGE_READ_SUCCESS, MESSAGE_SAVE_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_CLEAR:
      return {
        ...state,
        message: {},
      }
    case MESSAGE_READ_SUCCESS:
      return {
        ...state,
        message: action.data,
      }
    case MESSAGE_SAVE_SUCCESS:
      return {
        ...state,
        message: action.data,
      }
    default:
      return state
  }
}
