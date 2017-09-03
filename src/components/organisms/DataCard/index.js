import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { BarChart, Button, Card, Icon, Heading, Statistic } from 'components'
import { colors } from 'components/variables'

const styles = css`
  display: block;
`

const Wrapper = styled(({ ...props }) =>
  <Card {...props} />
)`${styles}`

const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto;
`

const DisplayDataWrapper = styled.div`
  width: 40%;
  margin-right: '2rem';
  h4 {
    color: ${colors.av_grey};
    font-size: 1rem;
    margin: 0 0 1rem;
  }
`

const ChartWrapper = styled.div`
  flex: 1;
  height: 250px;
`

const DataCard = (props) => {
  return (
    <Wrapper {...props}>
      <FlexWrapper>
        <DisplayDataWrapper>
          <Heading level={4}>Subscribers</Heading>
          <Statistic
            change={{ trend: 'positive', value: '16%' }}
            label="Subscriber Change (7 Days)"
            value="32"
          />
          <FlexWrapper>
            <Statistic
              label="Total Subscribers"
              size="extra-small"
              style={{ marginRight: '0.5rem' }}
              value="33"
            />
            <Statistic
              label="Unsubscribes"
              size="extra-small"
              value="1"
            />
          </FlexWrapper>
        </DisplayDataWrapper>
        <ChartWrapper>
          <BarChart />
        </ChartWrapper>
      </FlexWrapper>
    </Wrapper>
  )
}

export default DataCard
