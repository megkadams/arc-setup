import React from 'react'
import { shallow } from 'enzyme'
import Password from '.'

const wrap = (props = {}) => shallow(<Password {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'text' })
  expect(wrapper.find({ type: 'text' })).toHaveLength(1)
})

it('renders input by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('input')).toHaveLength(1)
})
