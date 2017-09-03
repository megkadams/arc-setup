import { initialState } from './selectors'
import { CAMPAIGN_CREATE_SUCCESS, CAMPAIGN_LIST_READ_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case CAMPAIGN_CREATE_SUCCESS:
      return {
        ...state,
        list: [action.detail, ...state.list],
      }
    case CAMPAIGN_LIST_READ_SUCCESS:
      return {
        ...state,
        list: action.list,
      }
    default:
      return state
  }
}
