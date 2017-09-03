import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

import {
  Heading,
  Icon,
  MessageHeader,
  Paragraph,
  Statistic,
} from 'components'

import { numberWithCommas } from 'components/utils'

const MessageDetails = styled.div`

`

const SplitWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 1rem;
  p {
    flex: 1;
    margin-right: 2rem;
  }
`

const StatWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const Wrapper = styled.li`
  background: white;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16);
  border-radius: 2px;
  margin-bottom: 1rem;
  h2 {
    margin: 0;
  }
  .link-wrapper {
    display: block;
    padding: 2rem;
    cursor: pointer;
    text-decoration: none;
  }
`

const IconWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

const Message = ({ delivery, id, name, start, status, text, ...props }) => {
  return (
    <Wrapper {...props}>
      <Link className="link-wrapper" to={status === 'SENT' ? `/dashboard/messages/${id}` : `/dashboard/messages/edit/${id}`}>
        <MessageHeader start={start} status={status} />
        <Heading level={2}>{name}</Heading>
        <SplitWrapper>
          <Paragraph style={{ marginTop: '0px' }}>{text}</Paragraph>
          <MessageDetails>
            {(status === 'DRAFT' || status === 'SCHEDULED') &&
              <IconWrapper>
                <Icon fill={colors.av_grey} icon="edit" size="1rem" />
                <Icon fill={colors.av_grey} icon="trashcan" size="1rem" style={{ marginLeft: '1.25rem' }} />
              </IconWrapper>
            }
            {status === 'SENT' &&
              <StatWrapper>
                <Statistic
                  label="Recipients"
                  size="small"
                  style={{ marginRight: '2rem' }}
                  value={numberWithCommas(delivery)}
                />
                <Statistic
                  label="CTR"
                  size="small"
                  value="26.3%"
                />
              </StatWrapper>
            }
          </MessageDetails>
        </SplitWrapper>
      </Link>
    </Wrapper>
  )
}

Message.propTypes = {
  delivery: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Message
