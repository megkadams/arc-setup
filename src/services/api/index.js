import 'whatwg-fetch'
import { stringify } from 'query-string'
import merge from 'lodash/merge'
import { apiUrl } from 'config'

export const checkStatus = (response) => {
  if (response.ok) {
    console.log('in check status and okay');
    return response
  }
  console.log('in check status and nah k');
  const error = new Error(`${response.status} ${response.statusText}`)
  error.response = response
  throw error
}

export const parseJSON = response => {
  console.log('i get to parse');
  return response.json() || {}
  // if (response.body && Object.keys(response.body).length > 0) {
  //   console.log(1)
  //   return response.json()
  // }
  // console.log(2)
  // return ''

  // return response.body ? JSON.parse(response.body) : ''
  // return response.json()
}

export const parseSettings = ({ method = 'get', data, headerValues, locale, ...otherSettings } = {}) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale,
  }
  if (headerValues) {
    headers = Object.assign(headers, headerValues)
  }
  const settings = {
    body: data ? JSON.stringify(data) : undefined,
    method,
    headers,
    ...otherSettings,
  }
  return settings
}

export const parseEndpoint = (endpoint, params) => {
  const url = endpoint.indexOf('http') === 0 ? endpoint : apiUrl + endpoint
  const querystring = params ? `?${stringify(params)}` : ''
  return `${url}${querystring}`
}

const api = {}

api.request = (endpoint, { params, ...settings } = {}) =>
  fetch(parseEndpoint(endpoint, params), parseSettings(settings))
    .then(checkStatus)
    .then(parseJSON)

;['delete', 'get'].forEach((method) => {
  api[method] = (endpoint, settings) => api.request(endpoint, { method, ...settings })
})

;['post', 'put', 'patch'].forEach((method) => {
  api[method] = (endpoint, data, headerValues, settings) => api.request(endpoint, { method, data, headerValues, ...settings })
})

api.create = (settings = {}) => ({
  settings,

  setToken(token) {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: `Bearer ${token}`,
    }
  },

  unsetToken() {
    this.settings.headers = {
      ...this.settings.headers,
      Authorization: undefined,
    }
  },

  request(endpoint, settings) {
    return api.request(endpoint, merge({}, this.settings, settings))
  },

  post(endpoint, data, settings) {
    return this.request(endpoint, { method: 'post', data, ...settings })
  },

  get(endpoint, settings) {
    return this.request(endpoint, { method: 'get', ...settings })
  },

  put(endpoint, data, settings) {
    return this.request(endpoint, { method: 'put', data, ...settings })
  },

  patch(endpoint, data, settings) {
    return this.request(endpoint, { method: 'patch', data, ...settings })
  },

  delete(endpoint, settings) {
    return this.request(endpoint, { method: 'delete', ...settings })
  },
})

export default api
