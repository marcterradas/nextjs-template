const baseSize = 16 // 1rem in pixels.
const ratio = 1.25
const spacer = 16 // 1rem in pixels.
const spacerHalf = spacer / 2
const borderWidth = 1
const borderRadius = 4
const height = 40

const fontSizes = {
  sm: baseSize / ratio,
  md: baseSize,
  lg: baseSize * ratio,
  xl: baseSize * Math.pow(ratio, 2),
  xxl: baseSize * Math.pow(ratio, 3)
}

const colors = {
  black: '#212529',
  blackLightest: '#343A40',
  darkGray: '#ADB5BD',
  white: '#F8F9FA',
  lightGray: '#E9ECEF',
  red: '#DC3545'
}

export {
  fontSizes,
  colors,
  spacer,
  spacerHalf,
  borderWidth,
  borderRadius,
  height
}
