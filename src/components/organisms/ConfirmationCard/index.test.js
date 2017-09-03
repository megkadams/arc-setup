import React from 'react'
import { shallow } from 'enzyme'
import ConfirmationCard from '.'

const wrap = (props = {}) => shallow(<ConfirmationCard {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
