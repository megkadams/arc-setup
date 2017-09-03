import * as actions from './actions'

test('messageCreateRequest', () => {
  expect(actions.messageCreateRequest({ title: 'test' })).toEqual({
    type: actions.MESSAGE_CREATE_REQUEST,
    data: { title: 'test' },
  })
})

test('messageCreateSuccess', () => {
  expect(actions.messageCreateSuccess({ id: 1, title: 'test' })).toEqual({
    type: actions.MESSAGE_CREATE_SUCCESS,
    detail: { id: 1, title: 'test' },
  })
})

test('messageCreateFailure', () => {
  expect(actions.messageCreateFailure('error')).toEqual({
    type: actions.MESSAGE_CREATE_FAILURE,
    error: 'error',
  })
})

test('messageListReadRequest', () => {
  expect(actions.messageListReadRequest({ fields: 'test' })).toEqual({
    type: actions.MESSAGE_LIST_READ_REQUEST,
    params: { fields: 'test' },
  })
})

test('messageListReadSuccess', () => {
  expect(actions.messageListReadSuccess([1, 2, 3])).toEqual({
    type: actions.MESSAGE_LIST_READ_SUCCESS,
    list: [1, 2, 3],
  })
})

test('messageListReadFailure', () => {
  expect(actions.messageListReadFailure('error')).toEqual({
    type: actions.MESSAGE_LIST_READ_FAILURE,
    error: 'error',
  })
})
