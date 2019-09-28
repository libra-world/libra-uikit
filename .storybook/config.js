import React from 'react'
import {configure, addDecorator} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {withThemesProvider} from 'storybook-addon-styled-component-theme'
import {GlobalStyle, darkTheme, lightTheme} from '../packages/uikit/src'
import {addReadme} from 'storybook-readme'

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /\.stories\.tsx$/)
function loadStories() {
  req.keys().forEach(req)
}

const themes = [lightTheme, darkTheme]

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
))
// addDecorator(addReadme)
addDecorator(withKnobs)
addDecorator(withThemesProvider(themes))
configure(loadStories, module)
