import { initialState } from './selectors'
import { EMPLOYEE_CREATE_SUCCESS, EMPLOYEE_LIST_READ_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE_SUCCESS:
      return {
        ...state,
        list: [action.detail, ...state.list],
      }
    case EMPLOYEE_LIST_READ_SUCCESS:
      return {
        ...state,
        list: action.list,
      }
    default:
      return state
  }
}
