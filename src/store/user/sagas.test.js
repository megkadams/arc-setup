import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

describe('createEmployee', () => {
  const data = { title: 'test' }

  it('calls success', () => {
    const generator = sagas.createEmployee(data)
    expect(generator.next().value).toEqual(call(api.employee, '/employees', data))
    expect(generator.next(data).value).toEqual(put(actions.employeeCreateSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createEmployee(data)
    expect(generator.next().value).toEqual(call(api.employee, '/employees', data))
    expect(generator.throw('test').value).toEqual(put(actions.employeeCreateFailure('test')))
  })
})

describe('readEmployeeList', () => {
  it('calls success', () => {
    const data = [1, 2, 3]
    const generator = sagas.readEmployeeList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/employees', { params: { _limit: 1 } }))
    expect(generator.next(data).value).toEqual(put(actions.employeeListReadSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readEmployeeList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/employees', { params: { _limit: 1 } }))
    expect(generator.throw('test').value).toEqual(put(actions.employeeListReadFailure('test')))
  })
})

test('watchEmployeeCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchEmployeeCreateRequest()
  expect(generator.next().value).toEqual(take(actions.EMPLOYEE_CREATE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.createEmployee, ...Object.values(payload)))
})

test('watchEmployeeListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchEmployeeListReadRequest()
  expect(generator.next().value).toEqual(take(actions.EMPLOYEE_LIST_READ_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.readEmployeeList, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchEmployeeCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchEmployeeListReadRequest))
})
