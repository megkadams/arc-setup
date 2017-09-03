export const CAMPAIGN_CREATE = 'CAMPAIGN_CREATE'
export const CAMPAIGN_CREATE_REQUEST = 'CAMPAIGN_CREATE_REQUEST'
export const CAMPAIGN_CREATE_SUCCESS = 'CAMPAIGN_CREATE_SUCCESS'
export const CAMPAIGN_CREATE_FAILURE = 'CAMPAIGN_CREATE_FAILURE'

export const campaignCreateRequest = (data, resolve, reject) => ({
  type: CAMPAIGN_CREATE_REQUEST,
  data,
  resolve,
  reject,
})

export const campaignCreateSuccess = detail => ({
  type: CAMPAIGN_CREATE_SUCCESS,
  detail,
})

export const campaignCreateFailure = error => ({
  type: CAMPAIGN_CREATE_FAILURE,
  error,
})

export const CAMPAIGN_LIST_READ = 'CAMPAIGN_LIST_READ'
export const CAMPAIGN_LIST_READ_REQUEST = 'CAMPAIGN_LIST_READ_REQUEST'
export const CAMPAIGN_LIST_READ_SUCCESS = 'CAMPAIGN_LIST_READ_SUCCESS'
export const CAMPAIGN_LIST_READ_FAILURE = 'CAMPAIGN_LIST_READ_FAILURE'

export const campaignListReadRequest = (params, resolve, reject) => ({
  type: CAMPAIGN_LIST_READ_REQUEST,
  params,
  resolve,
  reject,
})

export const campaignListReadSuccess = list => ({
  type: CAMPAIGN_LIST_READ_SUCCESS,
  list,
})

export const campaignListReadFailure = error => ({
  type: CAMPAIGN_LIST_READ_FAILURE,
  error,
})
