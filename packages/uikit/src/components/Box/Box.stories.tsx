import {storiesOf} from '@storybook/react';
import React from 'react';
import Box from './index'

storiesOf('Box', module)
.add('as prop', () => (
  <Box as="p">this is p ele</Box>
));
