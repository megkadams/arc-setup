import * as actions from './actions'

test('employeeCreateRequest', () => {
  expect(actions.employeeCreateRequest({ title: 'test' })).toEqual({
    type: actions.EMPLOYEE_CREATE_REQUEST,
    data: { title: 'test' },
  })
})

test('employeeCreateSuccess', () => {
  expect(actions.employeeCreateSuccess({ id: 1, title: 'test' })).toEqual({
    type: actions.EMPLOYEE_CREATE_SUCCESS,
    detail: { id: 1, title: 'test' },
  })
})

test('employeeCreateFailure', () => {
  expect(actions.employeeCreateFailure('error')).toEqual({
    type: actions.EMPLOYEE_CREATE_FAILURE,
    error: 'error',
  })
})

test('employeeListReadRequest', () => {
  expect(actions.employeeListReadRequest({ fields: 'test' })).toEqual({
    type: actions.EMPLOYEE_LIST_READ_REQUEST,
    params: { fields: 'test' },
  })
})

test('employeeListReadSuccess', () => {
  expect(actions.employeeListReadSuccess([1, 2, 3])).toEqual({
    type: actions.EMPLOYEE_LIST_READ_SUCCESS,
    list: [1, 2, 3],
  })
})

test('employeeListReadFailure', () => {
  expect(actions.employeeListReadFailure('error')).toEqual({
    type: actions.EMPLOYEE_LIST_READ_FAILURE,
    error: 'error',
  })
})
