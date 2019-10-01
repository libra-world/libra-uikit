import styled, {StyledComponent} from 'styled-components'
import Box, {BoxProps} from '../Box'
import DropdownMenu from './DropdownMenu'
import DropdownItem from './DropdownItem'

type DropdownType = StyledComponent<'div', BoxProps> & {
  DropdownMenu: typeof DropdownMenu
  DropdownItem: typeof DropdownItem
}

const Dropdown = styled(Box)`
  position: relative;
  display: inline-block;
` as DropdownType

Dropdown.DropdownMenu = DropdownMenu
Dropdown.DropdownItem = DropdownItem

export default Dropdown
