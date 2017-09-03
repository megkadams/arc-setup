export const initialState = {
  message: {},
}

export const getMessage = (state = initialState) => {
  return state.message || initialState.message
}

export const getFormifiedMessage = (state = initialState) => {
  if (state.message) {
    return Object.assign({}, state.formData, {
      delivery: state.message.delivery,
      id: state.message.id,
      name: state.message.name,
      subscribers: state.message.recipients,
      start: state.message.start,
      status: state.message.status,
      text: state.message.text,
      updated: state.message.updated,
      // TODO remove + add types, which is an array of ids
      response: state.message.response,
      targeting: state.message.targeting,
      unreadReplies: state.message.unreadReplies,
      user: state.message.user,
    })
  }

  return initialState
}
