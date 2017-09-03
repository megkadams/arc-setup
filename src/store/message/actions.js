// Get a message
export const MESSAGE_READ = 'MESSAGE_READ'
export const MESSAGE_READ_REQUEST = 'MESSAGE_READ_REQUEST'
export const MESSAGE_READ_SUCCESS = 'MESSAGE_READ_SUCCESS'
export const MESSAGE_READ_FAILURE = 'MESSAGE_READ_FAILURE'
export const messageReadRequest = (messageId) => ({
  type: MESSAGE_READ_REQUEST,
  messageId,
})

export const messageReadSuccess = data => ({
  type: MESSAGE_READ_SUCCESS,
  data,
})

export const messageReadFailure = error => ({
  type: MESSAGE_READ_FAILURE,
  error,
})

// Clear message from store
export const MESSAGE_CLEAR = 'MESSAGE_CLEAR'
export const clearMessage = () => ({
  type: MESSAGE_CLEAR,
})

// Save a new or edited message
export const MESSAGE_SAVE = 'MESSAGE_SAVE'
export const MESSAGE_SAVE_REQUEST = 'MESSAGE_SAVE_REQUEST'
export const MESSAGE_SAVE_SUCCESS = 'MESSAGE_SAVE_SUCCESS'
export const MESSAGE_SAVE_FAILURE = 'MESSAGE_SAVE_FAILURE'

export const saveMessageRequest = (data) => ({
  type: MESSAGE_SAVE_REQUEST,
  data,
})

export const saveMessageSuccess = (data) => ({
  type: MESSAGE_SAVE_SUCCESS,
  data,
})

export const saveMessageFailure = error => ({
  type: MESSAGE_SAVE_FAILURE,
  error,
})
