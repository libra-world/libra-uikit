import React from 'react'
import {storiesOf} from '@storybook/react'
import Button from './index'

storiesOf('Button', module)
  .add('variant', () => (
    <>
      <Button variant="primary">primary</Button>
      <Button variant="secondary" ml="xl">
        secondary
      </Button>
    </>
  ))
  .add('size', () => (
    <>
      <Button variant="primary" size="medium">
        primary
      </Button>
      <Button variant="secondary" ml="xl" size="large">
        secondary
      </Button>
    </>
  ))
  .add('other', () => (
    <>
      <Button variant="secondary" outline={true}>
        outline
      </Button>
      <Button variant="primary" disabled={true}>
        outline
      </Button>
      <Button variant="primary">outline</Button>
    </>
  ))
