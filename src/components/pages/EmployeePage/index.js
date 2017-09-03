// STEP2: Each page, component, what-have-you is in a folder with an index file and test file -- any of atoms, molecules, organisms also has a storybook file. At minimum for pages minic this folder example, which just tests that the page renders.
// Pages are specific instances of templates that show what a UI looks like with real representative content in place.

import React from 'react'

import { Header, PageTemplate } from 'components'
import { EmployeeList } from 'containers'

const EmployeePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <div>
        <h2>Employees</h2>
        <EmployeeList />
      </div>
    </PageTemplate>
  )
}

export default EmployeePage
