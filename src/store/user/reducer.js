import { initialState } from './selectors'
import { CALCULATE_DISTANCE_SUCCESS, USER_GET_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_GET_SUCCESS:
      return {
        ...state,
        user: action.user,
      }
    case CALCULATE_DISTANCE_SUCCESS:
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}
