// Load user
export const USER_GET = 'USER_GET'
export const USER_GET_REQUEST = 'USER_GET_REQUEST'
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS'
export const USER_GET_FAILURE = 'USER_GET_FAILURE'
export const getUserRequest = (params) => ({
  type: USER_GET_REQUEST,
  params,
})

export const getUserRequestSuccess = user => ({
  type: USER_GET_SUCCESS,
  user,
})

export const getUserRequestFailure = error => ({
  type: USER_GET_FAILURE,
  error,
})

// Save password updates
export const CALCULATE_DISTANCE = 'CALCULATE_DISTANCE'
export const CALCULATE_DISTANCE_REQUEST = 'CALCULATE_DISTANCE_REQUEST'
export const CALCULATE_DISTANCE_SUCCESS = 'CALCULATE_DISTANCE_SUCCESS'
export const CALCULATE_DISTANCE_FAILURE = 'CALCULATE_DISTANCE_FAILURE'
export const calculateAirportDistance = (data) => ({
  type: CALCULATE_DISTANCE_REQUEST,
  data,
})

export const calculateAirportDistanceSuccess = (data) => ({
  type: CALCULATE_DISTANCE_SUCCESS,
  data,
})

export const calculateAirportDistanceFailure = error => ({
  type: CALCULATE_DISTANCE_FAILURE,
  error,
})
