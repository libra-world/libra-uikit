# @libra-world/uikit
> A kit with styled-components and styled-systems.

## Live Playground

To run that demo on your own computer:

- Clone this repository
- `yarn install && yarn bootstrap`
- `yarn storybook`
- Visit http://localhost:6006/

## Getting Started

### Install

```sh
yarn add @libra-world-uikit/uikit styled-components
```

### Include component

```js
import {Button, Box, Flex} from '@libra-world-uikit/uikit'
```

### Theming

`@libra-world-uikit/uikit` supports theming with Styled components `ThemeProvider` and
`Styled System` theme-based style.
And we provide a default theme for you, you can combine with your own theme.

```jsx
<ThemeProvider
  theme={{
    breakpoints: ['32em', '48em', '64em'],
  }}
>
  ...
</ThemeProvider>
```
