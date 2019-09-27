import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from './index';

storiesOf('Box', module)
  .add('as prop', () => (
    <Input
      placeholder="test"
      value='test'
      id='test'
      ariaLabel="string"
      showCalendarIcon={false}
      vertical={false}
      isActive={true}
      rtl={false}

      onChange={(val: any) => {
        console.log(val);
      }}
    />
  ));
