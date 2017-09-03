// STEP10: Learn/see more from redux here: http://redux.js.org/docs/recipes/ComputingDerivedData.html and check out more about 'why selectors' here: https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44 (number 9)
// TBH I am still confused what all of these things are doing and have only used getList thus far.

import { denormalize } from 'normalizr'
import * as schemas from './schemas'

export const initialState = {}

export const getEntity = (state = initialState, entity) => state[entity] || {}

export const getDetail = (state = initialState, entity, id) => getEntity(state, entity)[id]

export const getList = (state = initialState, entity, ids) =>
  (ids || Object.keys(getEntity(state, entity))).map(id => getDetail(state, entity, id))

export const getDenormalizedDetail = (state = initialState, entity, id) =>
  denormalize(getDetail(state, entity, id), schemas[entity], state)

export const getDenormalizedList = (state = initialState, entity, ids) =>
  denormalize(getList(state, entity, ids), [schemas[entity]], state)
