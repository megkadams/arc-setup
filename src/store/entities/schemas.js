// STEP9: Many APIs, public or not, return JSON data that has deeply nested objects. Using data in this kind of structure is often very difficult for JavaScript applications, especially those using Flux or Redux.
// Normalizr is a small, but powerful utility for taking JSON with a schema definition and returning nested entities with their IDs, gathered in dictionaries.
// 'Schema' creates a schema to normalize an array of entities. See more here: https://github.com/paularmstrong/normalizr/blob/master/docs/api.md#schema
// These are used by our selectors. (./selectors)
// Actions that are returning data need to be put here for the state to properly digest (otherwise will have weird things like an array with the right number of items, but where each item is 'undefined' instead of an object)
// I'm sure can also exclude schema when not needed, but don't have example of that yet.

import { schema } from 'normalizr'

export const employee = new schema.Entity('employee')
export const campaign = new schema.Entity('campaign')
export const messages = new schema.Entity('messages')
export const messageCategories = new schema.Entity('messageCategories')

export const actionsMeta = {
  EMPLOYEE_LIST_READ_SUCCESS: { property: 'list', schema: [employee] },
  EMPLOYEE_CREATE_SUCCESS: { property: 'detail', schema: employee },
  CAMPAIGN_LIST_READ_SUCCESS: { property: 'list', schema: [campaign] },
  CAMPAIGN_CREATE_SUCCESS: { property: 'detail', schema: campaign },
  MESSAGE_LIST_READ_SUCCESS: { property: 'list', schema: [messages] },
  MESSAGE_CATEGORIES_READ_SUCCESS: { property: 'list', schema: [messageCategories] },
}
