import * as actions from './actions'

test('campaignCreateRequest', () => {
  expect(actions.campaignCreateRequest({ title: 'test' })).toEqual({
    type: actions.CAMPAIGN_CREATE_REQUEST,
    data: { title: 'test' },
  })
})

test('campaignCreateSuccess', () => {
  expect(actions.campaignCreateSuccess({ id: 1, title: 'test' })).toEqual({
    type: actions.CAMPAIGN_CREATE_SUCCESS,
    detail: { id: 1, title: 'test' },
  })
})

test('campaignCreateFailure', () => {
  expect(actions.campaignCreateFailure('error')).toEqual({
    type: actions.CAMPAIGN_CREATE_FAILURE,
    error: 'error',
  })
})

test('campaignListReadRequest', () => {
  expect(actions.campaignListReadRequest({ fields: 'test' })).toEqual({
    type: actions.CAMPAIGN_LIST_READ_REQUEST,
    params: { fields: 'test' },
  })
})

test('campaignListReadSuccess', () => {
  expect(actions.campaignListReadSuccess([1, 2, 3])).toEqual({
    type: actions.CAMPAIGN_LIST_READ_SUCCESS,
    list: [1, 2, 3],
  })
})

test('campaignListReadFailure', () => {
  expect(actions.campaignListReadFailure('error')).toEqual({
    type: actions.CAMPAIGN_LIST_READ_FAILURE,
    error: 'error',
  })
})
