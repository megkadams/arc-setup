// STEP7 : Actions should start with the store name (e.g. MODAL_OPEN for modal store, POST_LIST_REQUEST for post store) and end with REQUEST, SUCCESS or FAILURE if this is an async operation.
// Action creators should have the same name of their respective actions, but in camelCase (e.g. modalOpen).
// Constants are grouped where they are called. Sagas listen for these actions! So define here and then do side effect work (api stuff) in the saga. Learn more here: https://github.com/redux-saga/redux-saga and learn more about how this works (generators) here: https://redux-saga.github.io/redux-saga/docs/ExternalResources.html

// export const EMPLOYEE_CREATE = 'EMPLOYEE_CREATE'
// export const EMPLOYEE_CREATE_REQUEST = 'EMPLOYEE_CREATE_REQUEST'
// export const EMPLOYEE_CREATE_SUCCESS = 'EMPLOYEE_CREATE_SUCCESS'
// export const EMPLOYEE_CREATE_FAILURE = 'EMPLOYEE_CREATE_FAILURE'
//
// export const employeeCreateRequest = (data, resolve, reject) => ({
//   type: EMPLOYEE_CREATE_REQUEST,
//   data,
//   resolve,
//   reject,
// })
//
// export const employeeCreateSuccess = detail => ({
//   type: EMPLOYEE_CREATE_SUCCESS,
//   detail,
// })
//
// export const employeeCreateFailure = error => ({
//   type: EMPLOYEE_CREATE_FAILURE,
//   error,
// })

export const EMPLOYEE_LIST_READ = 'EMPLOYEE_LIST_READ'
export const EMPLOYEE_LIST_READ_REQUEST = 'EMPLOYEE_LIST_READ_REQUEST'
export const EMPLOYEE_LIST_READ_SUCCESS = 'EMPLOYEE_LIST_READ_SUCCESS'
export const EMPLOYEE_LIST_READ_FAILURE = 'EMPLOYEE_LIST_READ_FAILURE'

export const employeeListReadRequest = (params, resolve, reject) => ({
  type: EMPLOYEE_LIST_READ_REQUEST,
  params,
  resolve,
  reject,
})

export const employeeListReadSuccess = list => ({
  type: EMPLOYEE_LIST_READ_SUCCESS,
  list,
})

export const employeeListReadFailure = error => ({
  type: EMPLOYEE_LIST_READ_FAILURE,
  error,
})
