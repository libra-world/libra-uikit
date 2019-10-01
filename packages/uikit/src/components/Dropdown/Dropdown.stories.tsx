import * as React from 'react'
import {storiesOf} from '@storybook/react'
import Dropdown from './index'
import Button from '../Button'

const DropdownMenu = Dropdown.DropdownMenu
const DropdownItem = Dropdown.DropdownItem

storiesOf('Dropdown', module).add('right alignment', () => {
  const [hidden, setHidden] = React.useState(true)

  return (
    <Dropdown>
      <Button onClick={() => setHidden(!hidden)}>dropdown button</Button>
      <DropdownMenu rightAlign hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem active disabled>
          1
        </DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
        <DropdownItem>Seperated link</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
})
