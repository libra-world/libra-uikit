import React from 'react'
import {storiesOf} from '@storybook/react'
import Box from './index'

storiesOf('Box', module).add('as prop', () => <Box as="p">this is p ele</Box>)
