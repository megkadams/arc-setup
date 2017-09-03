import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

describe('createMessage', () => {
  const data = { title: 'test' }

  it('calls success', () => {
    const generator = sagas.createMessage(data)
    expect(generator.next().value).toEqual(call(api.message, '/messages', data))
    expect(generator.next(data).value).toEqual(put(actions.messageCreateSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createMessage(data)
    expect(generator.next().value).toEqual(call(api.message, '/messages', data))
    expect(generator.throw('test').value).toEqual(put(actions.messageCreateFailure('test')))
  })
})

describe('readMessageList', () => {
  it('calls success', () => {
    const data = [1, 2, 3]
    const generator = sagas.readMessageList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/messages', { params: { _limit: 1 } }))
    expect(generator.next(data).value).toEqual(put(actions.messageListReadSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readMessageList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/messages', { params: { _limit: 1 } }))
    expect(generator.throw('test').value).toEqual(put(actions.messageListReadFailure('test')))
  })
})

test('watchMessageCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchMessageCreateRequest()
  expect(generator.next().value).toEqual(take(actions.MESSAGE_CREATE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.createMessage, ...Object.values(payload)))
})

test('watchMessageListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchMessageListReadRequest()
  expect(generator.next().value).toEqual(take(actions.MESSAGE_LIST_READ_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.readMessageList, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchMessageCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchMessageListReadRequest))
})
