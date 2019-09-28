import styledNormalize from 'styled-normalize'
import {DefaultTheme, createGlobalStyle} from 'styled-components'
import {reset, virtuallisted, iconfont} from './cssfiles'

// @ts-ignore
const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
  ${styledNormalize}
  ${reset}
  body {
    background-color: ${props => props.theme['colors'].background};
  }
  html, body, #__next {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  ${iconfont}
  ${virtuallisted}
`

export default GlobalStyle
