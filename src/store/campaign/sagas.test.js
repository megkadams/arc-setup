import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

describe('createCampaign', () => {
  const data = { title: 'test' }

  it('calls success', () => {
    const generator = sagas.createCampaign(data)
    expect(generator.next().value).toEqual(call(api.campaign, '/campaigns', data))
    expect(generator.next(data).value).toEqual(put(actions.campaignCreateSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createCampaign(data)
    expect(generator.next().value).toEqual(call(api.campaign, '/campaigns', data))
    expect(generator.throw('test').value).toEqual(put(actions.campaignCreateFailure('test')))
  })
})

describe('readCampaignList', () => {
  it('calls success', () => {
    const data = [1, 2, 3]
    const generator = sagas.readCampaignList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/campaigns', { params: { _limit: 1 } }))
    expect(generator.next(data).value).toEqual(put(actions.campaignListReadSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readCampaignList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/campaigns', { params: { _limit: 1 } }))
    expect(generator.throw('test').value).toEqual(put(actions.campaignListReadFailure('test')))
  })
})

test('watchCampaignCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchCampaignCreateRequest()
  expect(generator.next().value).toEqual(take(actions.CAMPAIGN_CREATE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.createCampaign, ...Object.values(payload)))
})

test('watchCampaignListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchCampaignListReadRequest()
  expect(generator.next().value).toEqual(take(actions.CAMPAIGN_LIST_READ_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.readCampaignList, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchCampaignCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchCampaignListReadRequest))
})
