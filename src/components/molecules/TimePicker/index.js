
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'
import onClickOutside from 'react-onclickoutside'
import moment from 'moment'
import { keyCodeTest } from 'components/utils'


const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 182px;
  border: 1px solid ${colors.av_silver};
  border-radius: 2px;
  flex: 0 1 auto;
  z-index: 10;
  font-size: 0.875rem;
  &:focus {
    outline: 0;
  }
`

const SearchableInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  border: none;
  flex: 1 0 100%;
  padding: 12px;
  color: ${colors.av_black};
  position: relative;
  background-color: white;
  &:focus {
    border: none;
    outline: 0;
  }
`

const ActivateDropdown = styled.button`
  position: absolute;
  right: 1px;
  top: 0;
  width: 3rem;
  height: 100%;
  appearance: none;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: ${colors.av_silver};
  &:focus {
    outline: none;
  }
  span {
    position: absolute;
    top: 11px;
    right: 1rem;
  }
`

const Dropdown = styled.ul`
  display: inline-block;
  position: absolute;
  top: 100%;
  width: calc(100% + 2px);
  height: auto;
  margin: 0 0 0 -1px;
  right: 0;
  left: 0;
  list-style: none;
  padding: 0;
  background: white;
  max-height: 300px;
  overflow-y: auto;
  border-right: 1px solid ${colors.av_silver};
  border-left: 1px solid ${colors.av_silver};
  border-bottom: 1px solid ${colors.av_silver};
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  &:empty {
   display: none;
  }
  li {
    display: block;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    cursor: pointer;
    transition: all 50ms ease-in-out;
    border-bottom: 1px solid #FAFAFA;
    &:focus {
      outline: 0;
    }
    &:hover, &.has-focus {
      background: ${colors.av_ghost};
    }
    &:last-child {
      border-bottom: none;
    }
    &.no-results {
      color: ${colors.av_grey};
    }
  }
`

class TimePicker extends Component {
  static propTypes = {
    dataList: PropTypes.array,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    pastError: PropTypes.bool,
    placeholder: PropTypes.string,
    selectedTime: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    timeInterval: PropTypes.number,
  }

  static defaultProps = {
    selectedTime: null,
  }

  constructor(props, context) {
    super(props, context)

    // Build list of possible times
    const timeArray = []
    let addToTimeTable
    let currentTime
    const timeInterval = this.props.timeInterval || 5
    if (this.props.selectedTime && !this.props.selectedTime === null) {
      // If receiving a prop, assume necessary rounding has been done outside of the component
      addToTimeTable = this.props.selectedTime
      currentTime = moment()
    } else {
      // If initiating from current moment, round to nearest interval (or default 5 minutes)
      currentTime = moment()
      const remainderToFiveMinuteInterval = (timeInterval - currentTime.minute()) % timeInterval
      addToTimeTable = moment(currentTime).add(remainderToFiveMinuteInterval, 'minutes')
    }

    while (moment(addToTimeTable) <= moment(currentTime).add(24, 'hours')) {
      timeArray.push({
        key: moment(addToTimeTable).unix(),
        value: moment(addToTimeTable).format('h:mma'),
      })
      addToTimeTable = Object.assign({}, moment(addToTimeTable).add(timeInterval, 'minutes'))
    }

    this.state = {
      resultsList: [],
      dropdownOpen: false,
      hasFocus: -1,
      timeList: timeArray,
      searchValue: this.props.selectedTime !== null ? moment(this.props.selectedTime).format('h:mma') : '',
    }
  }

  // componentDidUpdate() {
  //   console.log(this.timePicker);
  //   if ((this.state.dropdownOpen && this.props.selectedTime != null) || (this.state.dropdownOpen === false && this.props.selectedTime != null)) {
  //     this.timePicker.removeAttribute('placeholder')
  //   } else {
  //     this.timePicker.setAttribute('placeholder', this.props.placeholder ? this.props.placeholder : 'Type to search')
  //   }
  // }

  activateAll = () => {
    this.setState({
      resultsList: this.state.timeList.slice(),
      dropdownOpen: true,
    })
  }

  activateDropdown = () => {
    if (this.state.dropdownOpen) {
      // TODO this isn't working
      this.timePicker.value = ''
      this.clearDropdown()
    } else {
      // TODO this isn't working
      this.timePicker.value = ''
      // this.timePicker.focus()
      this.activateAll()
    }
  }

  addToSelected = (selectedTime) => {
    this.setState({
      searchValue: selectedTime.value,
      selectedTime: selectedTime.key,
    }, this.clearDropdown, this.updateTime(this.props.name, selectedTime.key))
  }

  clearDropdown = () => {
    this.setState({
      resultsList: [],
      dropdownOpen: false,
    })
  }

  handleClickOutside = (event) => {
    if (this.state.searchValue.length === 0) {
      this.updateTime(this.props.name, null)
    }
    this.clearDropdown()
  }

  focusSearchableSelect = (event) => {
    if (event != null && keyCodeTest.isReturnKey(event.keyCode)) {
      event.preventDefault()
      event.stopPropagation()
      if (this.state.resultsList.length > 0) {
        if (this.state.hasFocus > -1) {
          this.addToSelected(this.state.resultsList[this.state.hasFocus])
          this.setState({
            hasFocus: -1,
          })
        } else {
          this.addToSelected(this.state.resultsList[0])
          this.setState({
            hasFocus: -1,
          })
        }
      }
    } else if (event != null && keyCodeTest.isTab(event.keyCode)) {
      event.preventDefault()
      event.stopPropagation()
      this.addToSelected(this.state.resultsList[0])
      this.setState({
        hasFocus: -1,
      })
    } else if (event != null && keyCodeTest.isUpArrow(event.keyCode)) {
      if (this.state.resultsList.length > 0) {
        if (this.state.hasFocus > -1) {
          event.preventDefault()
          event.stopPropagation()
          this.setState({
            hasFocus: this.state.hasFocus - 1,
          })
        }
      }
    } else if (event != null && keyCodeTest.isDownArrow(event.keyCode)) {
      if (this.state.resultsList.length > 0) {
        if (this.state.hasFocus < (this.state.resultsList.length - 1)) {
          event.preventDefault()
          event.stopPropagation()
          this.setState({
            hasFocus: this.state.hasFocus + 1,
          })
        }
      }
    } else if (event != null && keyCodeTest.isDeleteKey(event.keyCode)) {
      if (this.state.searchValue.length === 0) {
        event.stopPropagation()
        this.setState({
          selectedTime: null,
        }, this.updateTime(this.props.name, ''), this.activateAll)
      } else {
        event.stopPropagation()
        this.setState({
          selectedTime: null,
        }, this.updateTime(this.props.name, ''), this.searchForMatchingResults)
      }
    }
  }

  searchForMatchingResults = (event) => {
    if (this.timePicker.value.length === 0) {
      this.activateAll()
    } else {
      this.searchDataList(this.timePicker.value)
    }
  }

  searchDataList = (searchValue) => {
    const searchedDataList = this.state.timeList.filter((inputValue) => (inputValue.value.toLowerCase().startsWith(searchValue.toLowerCase())))
    this.setState({
      resultsList: searchedDataList,
      dropdownOpen: true,
    })
  }

  setPlaceholder() {
    if ((this.state.dropdownOpen && this.props.selectedTime != null) || (this.state.dropdownOpen === false && this.props.selectedTime != null)) {
      return ''
    }

    return this.props.placeholder || 'Type to search'
  }

  updateSearchValue = (event) => {
    this.setState({
      searchValue: event.target.value,
    }, this.searchDataList(event.target.value))
  }

  updateTime = (name, time) => {
    this.props.handleChange(name, time)
  }

  render() {
    const { resultsList, searchValue } = this.state

    const placeholder = this.setPlaceholder()

    const renderList = (
      this.state.dropdownOpen && resultsList.length === 0 ?
        <li className="no-results">No results found.</li>
      :
      resultsList.map((result, i) => {
        return (
          <li
            key={result.key}
            className={this.state.hasFocus === i ? 'has-focus' : null}
            onClick={() => this.addToSelected(result)}>
            {result.value}
          </li>
        )
      })
    )

    return (
      <span>
        <Wrapper
          className={this.props.pastError ? 'error' : null}
          onKeyDown={this.focusSearchableSelect}
          tabIndex={0}>
          <SearchableInput
            autoComplete="off"
            name={this.props.name}
            onChange={this.updateSearchValue}
            onFocus={resultsList.length === 0 ? this.activateAll : this.searchForMatchingResults}
            maxLength="7"
            placeholder={placeholder}
            ref={(input) => { this.timePicker = input }}
            type="search"
            value={searchValue}
          />
          <ActivateDropdown
            onClick={this.activateDropdown}
            type="button">
            <span>EST</span>
            {/* <span>{moment().tz(moment.tz.guess()).format('z')}</span> */}
          </ActivateDropdown>
          <Dropdown>
            {renderList}
          </Dropdown>
        </Wrapper>
        {this.props.pastError && <p className="error-message">Time selected is in the past.</p>}
      </span>
    )
  }
}

export default onClickOutside(TimePicker)
