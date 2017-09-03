// STEP13: Note that molecules are not always repeating elements (an employee in a list of employees), that's just how used in this particular example. A molecule is a group of atoms (html elements) that when put together have context/meaning (a search form that comprises an input, label and submit button, for instance).
// Create and import atoms (html elements) when it is an element that maintains any of its own styling. Note that here, have explicltly used acutal html elements, because a table row or cell doesn't maintain its own styling site-wide -- its styling is always determined by the table element. Things like heading tags, p tags, inputs, buttons, links -- all good candidates to be atoms and then imported.
// Don't forget tests! Atoms, molecules and organisms should render to storybook and at bare minimum have render proof in test. We can always be more robust later, but at least plug in file and be sure component appears. Will reject PRs without test file present, even if not enough time to fill out completely.

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Example: import { Heading, Paragraph } from 'components'

const TableRow = styled.tr`
  border-bottom: 1px solid black;
  td {
    padding: 1rem;
  }
`

const Employee = ({ firstName, lastName, phone, ...props }) => {
  return (
    <TableRow {...props}>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{phone}</td>
    </TableRow>
  )
}

Employee.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}

export default Employee
