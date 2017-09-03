// export const MESSAGE_CREATE = 'MESSAGE_CREATE'
// export const MESSAGE_CREATE_REQUEST = 'MESSAGE_CREATE_REQUEST'
// export const MESSAGE_CREATE_SUCCESS = 'MESSAGE_CREATE_SUCCESS'
// export const MESSAGE_CREATE_FAILURE = 'MESSAGE_CREATE_FAILURE'
//
// export const messageCreateRequest = (data, resolve, reject) => ({
//   type: MESSAGE_CREATE_REQUEST,
//   data,
//   resolve,
//   reject,
// })
//
// export const messageCreateSuccess = detail => ({
//   type: EMPLOYEE_CREATE_SUCCESS,
//   detail,
// })
//
// export const messageCreateFailure = error => ({
//   type: EMPLOYEE_CREATE_FAILURE,
//   error,
// })

export const MESSAGE_LIST_READ = 'MESSAGE_LIST_READ'
export const MESSAGE_LIST_READ_REQUEST = 'MESSAGE_LIST_READ_REQUEST'
export const MESSAGE_LIST_READ_SUCCESS = 'MESSAGE_LIST_READ_SUCCESS'
export const MESSAGE_LIST_READ_FAILURE = 'MESSAGE_LIST_READ_FAILURE'

export const messageListReadRequest = (params) => ({
  type: MESSAGE_LIST_READ_REQUEST,
  params,
})

export const messageListReadSuccess = list => ({
  type: MESSAGE_LIST_READ_SUCCESS,
  list,
})

export const messageListReadFailure = error => ({
  type: MESSAGE_LIST_READ_FAILURE,
  error,
})
