// Get array of message categories
export const MESSAGE_CATEGORIES_READ = 'MESSAGE_CATEGORIES_READ'
export const MESSAGE_CATEGORIES_READ_REQUEST = 'MESSAGE_CATEGORIES_READ_REQUEST'
export const MESSAGE_CATEGORIES_READ_SUCCESS = 'MESSAGE_CATEGORIES_READ_SUCCESS'
export const MESSAGE_CATEGORIES_READ_FAILURE = 'MESSAGE_CATEGORIES_READ_FAILURE'
export const messageCategoriesReadRequest = (messageId) => ({
  type: MESSAGE_CATEGORIES_READ_REQUEST,
  messageId,
})

export const messageCategoriesReadSuccess = list => ({
  type: MESSAGE_CATEGORIES_READ_SUCCESS,
  list,
})

export const messageCategoriesReadFailure = error => ({
  type: MESSAGE_CATEGORIES_READ_FAILURE,
  error,
})


// Get count of deduped subscribers for a selection of message categories
export const MESSAGE_CATEGORY_COUNT_READ = 'MESSAGE_CATEGORY_COUNT_READ'
export const MESSAGE_CATEGORY_COUNT_READ_REQUEST = 'MESSAGE_CATEGORY_COUNT_READ_REQUEST'
export const MESSAGE_CATEGORY_COUNT_READ_SUCCESS = 'MESSAGE_CATEGORY_COUNT_READ_SUCCESS'
export const MESSAGE_CATEGORY_COUNT_READ_FAILURE = 'MESSAGE_CATEGORY_COUNT_READ_FAILURE'

export const messageCategoryCountRequest = (messageCats) => ({
  type: MESSAGE_CATEGORY_COUNT_READ_REQUEST,
  messageCats,
})

export const messageCategoryCountSuccess = (data) => (console.log(data), {
  type: MESSAGE_CATEGORY_COUNT_READ_SUCCESS,
  data,
})

export const messageCategoryCountFailure = error => ({
  type: MESSAGE_CATEGORY_COUNT_READ_FAILURE,
  error,
})
