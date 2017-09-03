export const initialState = {
  list: [],
  subscribeCount: 0,
}

export const getList = (state = initialState) => {
  return state.list || initialState.list
}
export const getCount = (state = initialState) => {
  return state.subscribeCount || initialState.subscribeCount
}
