import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

import { Paragraph } from 'components'

const ExtraSmallWrapper = styled.div`
  display: block;
  float: left;
  width: calc(50% - 0.5rem);
  .stat-value {
    display: block;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    line-height: 1;
  }
  .stat-label {
    font-size: 16px;
    color: black;
    line-height: 1;
    margin: 0.25rem 0 0;
  }
`

const SmallWrapper = styled.div`
  display: block;
  float: left;
  width: calc(50% - 0.5rem);
  .stat-value {
    display: block;
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    line-height: 1;
  }
  .stat-label {
    font-size: 16px;
    color: black;
    line-height: 1;
    margin: 0.25rem 0 0;
  }
`

const LargeWrapper = styled.div`
  display: block;
  width: 100%;
  vertical-align: baseline;
  margin-bottom: 2rem;
  .stat-value {
    display: inline-block;
    font-size: 40px;
    font-weight: bold;
    line-height: 1;
    margin: 0;
  }
  .stat-label {
    font-size: 20px;
    font-weight: 500;
    color: black;
    margin: 0.4rem 0 0;
    line-height: 1;
  }
`

const ChangeValue = styled.span`
  font-size: 1rem;
  color: ${colors.av_warning};
  margin-left: 0.5rem;
  &.positive {
    color: ${colors.av_success};
  }
`

const Statistic = ({ change, label, size, style, value }) => {
  if (size === 'extra-small') {
    return (
      <ExtraSmallWrapper style={style || null}>
        <Paragraph className="stat-value">
          {value}{change && <ChangeValue className={change.trend === 'positive' ? 'positive' : null}><span>{change.trend === 'positive' ? '+' : '-'}{change.value}</span></ChangeValue>}</Paragraph>
        <Paragraph className="stat-label">{label}</Paragraph>
      </ExtraSmallWrapper>
    )
  } else if (size === 'small') {
    return (
      <SmallWrapper style={style || null}>
        <Paragraph className="stat-value">
          {value}{change && <ChangeValue className={change.trend === 'positive' ? 'positive' : null}><span>{change.trend === 'positive' ? '+' : '-'}{change.value}</span></ChangeValue>}</Paragraph>
        <Paragraph className="stat-label">{label}</Paragraph>
      </SmallWrapper>
    )
  }

  return (
    <LargeWrapper style={style || null}>
      <Paragraph className="stat-value">
        {value}{change && <ChangeValue className={change.trend === 'positive' ? 'positive' : null}><span>{change.trend === 'positive' ? '+' : '-'}{change.value}</span></ChangeValue>}</Paragraph>
      <Paragraph className="stat-label">{label}</Paragraph>
    </LargeWrapper>
  )
}

Statistic.propTypes = {
  change: PropTypes.shape({
    trend: PropTypes.string,
    value: PropTypes.string,
  }),
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
}

export default Statistic
