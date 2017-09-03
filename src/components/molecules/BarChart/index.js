import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { colors } from 'components/variables'

import { Paragraph } from 'components'

const Wrapper = styled.div`
  background: ${colors.av_ghost};
  display: block;
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  p {
    margin: 0;
    font-size: 0.875rem;
  }
`

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
]

const RechartBarChart = ({ body, ...props }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

RechartBarChart.propTypes = {
  // body: PropTypes.string.isRequired,
}

export default RechartBarChart
