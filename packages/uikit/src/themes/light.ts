import {DefaultTheme} from 'styled-components'
// import { fontFace } from './fontFace';
import Color from 'color'
import baseTheme from './baseTheme'

const {colors: palette, fontSizes} = baseTheme

const colors = {
  ...palette,
  selectOptionbg: palette.grays[1],
  selectOptionHoverbg: Color(palette.grays[1])
    .lighten(0.3)
    .string(),
  background: palette.white,
  foreground: palette.white,
  button: '#2a2f37',
  primary: palette.yellow,
  error: palette.red,
  cardBg: palette.darkGray,
  caption: palette.gray,
  mask: palette.lightBlack,
  iconCheck: Color(palette.yellow)
    .alpha(0.15)
    .string(),
}

const buttons = {
  default: {
    fontWeight: 500,
    fontSize: fontSizes[2],
  },
  small: {
    padding: '3px 6px',
    fontWeight: 400,
    fontSize: fontSizes[0],
  },
}

const theme: DefaultTheme = {
  ...baseTheme,
  name: 'lightTheme',
  colors,
  buttons,
}

export default theme
