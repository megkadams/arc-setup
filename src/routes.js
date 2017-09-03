import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'

import {
  HomePage,
  NotFoundPage,
} from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
