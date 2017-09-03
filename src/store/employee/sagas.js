// Redux saga expose several methods called Effects:
// > Fork performs a non-blocking operation on the function passed.
// > Take pauses until action received.
// > Race runs effects simultaneously, then cancels them all once one finishes.
// > Call runs a function. If it returns a promise, pauses the saga until the promise is resolved.
// > Put dispatches an action.
// > Select Runs a selector function to get data from the state
// > takeLatest means we are going to execute the operations, then return only the results of the last one call. If we trigger several cases, it’s going to ignore all of them except the last one.
// > takeEvery will return results for all the calls triggered.
// Good article about Saga, excusing the 'homeless' example, which I find in very poor taste. https://ohyayanotherblog.ghost.io/redux-saga-clock/ 

import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

// export function* createEmployee(newData) {
//   try {
//     const data = yield call(api.employee, '/employees', newData)
//     yield put(actions.employeeCreateSuccess(data))
//   } catch (e) {
//     yield put(actions.employeeCreateFailure(e))
//   }
// }

// this had params, refer back to original if need assist
export function* readEmployeeList() {
  try {
    const data = yield call(api.get, '/employees')
    yield put(actions.employeeListReadSuccess(data))
  } catch (e) {
    yield put(actions.employeeListReadFailure(e))
  }
}

// export function* watchEmployeeCreateRequest() {
//   while (true) {
//     const { data } = yield take(actions.EMPLOYEE_CREATE_REQUEST)
//     yield call(createEmployee, data)
//   }
// }

export function* watchEmployeeListReadRequest() {
  while (true) {
    const { params } = yield take(actions.EMPLOYEE_LIST_READ_REQUEST)
    yield call(readEmployeeList, params)
  }
}

export default function* () {
  // yield fork(watchEmployeeCreateRequest)
  yield fork(watchEmployeeListReadRequest)
}
