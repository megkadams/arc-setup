// STEP12: An organism is a group of atoms, molecules and/or other organisms (e.g. Form). Why stateless functional component and not React component? Check it: https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Employee } from 'components'

const Table = styled.table`
  border: 1px solid black;
  padding: 1rem;
  border-collapse: collapse;
`

const EmployeeList = ({ list, loading, ...props }) => {
  return (
    <Table {...props}>
      <tbody>
        {loading && <tr><td>Loading</td></tr>}
        {list.map((employee) => <Employee key={employee.id} loading={loading} {...employee} />)}
      </tbody>
    </Table>
  )
}

EmployeeList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default EmployeeList
