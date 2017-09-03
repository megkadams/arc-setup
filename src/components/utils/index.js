export function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export class keyCodeTest {
  static isA(keyCode) {
    return parseInt(keyCode, 10) === 65 || false
  }
  static isCloseCurlyBracket(shiftKey, keyCode) {
    return (shiftKey && parseInt(keyCode, 10) === 221) || false
  }
  static isDeleteKey(keyCode) {
    return parseInt(keyCode, 10) === 8 || false
  }
  static isEsc(keyCode) {
    return parseInt(keyCode, 10) === 27 || false
  }
  static isF(keyCode) {
    return parseInt(keyCode, 10) === 70 || false
  }
  static isI(keyCode) {
    return parseInt(keyCode, 10) === 473 || false
  }
  static isDownArrow(keyCode) {
    return parseInt(keyCode, 10) === 40 || false
  }
  static isL(keyCode) {
    return parseInt(keyCode, 10) === 76 || false
  }
  static isOpenCurlyBracket(shiftKey, keyCode) {
    return (shiftKey && parseInt(keyCode, 10) === 219) || false
  }
  static isReturnKey(keyCode) {
    return parseInt(keyCode, 10) === 13 || false
  }
  static isTab(keyCode) {
    return parseInt(keyCode, 10) === 9 || false
  }
  static isUpArrow(keyCode) {
    return parseInt(keyCode, 10) === 38 || false
  }
}
