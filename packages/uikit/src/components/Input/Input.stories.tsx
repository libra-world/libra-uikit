import {storiesOf} from '@storybook/react'
import React from 'react'
import Box from '../Box'
import Input from './index'

storiesOf('Input', module)
  .add('as prop', () => (
    <Input
      placeholder="test"
      value="test"
      id="test"
      ariaLabel="string"
      vertical={false}
      isActive={false}
      theme={{
        inputLabelTheme: {mb: '30px'},
      }}
      onChange={(val: any) => {
        console.log(val)
      }}
    />
  ))
  .add('prefix addon', () => (
    <Input
      placeholder="test"
      value="test"
      id="test"
      ariaLabel="string"
      vertical={false}
      isActive={true}
      rtl={false}
      prefixAddon={<Box mx="8px">*</Box>}
      onChange={(val: any) => {
        console.log(val)
      }}
    />
  ))
