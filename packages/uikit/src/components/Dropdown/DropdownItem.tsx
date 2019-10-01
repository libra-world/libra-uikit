import styled, {css} from 'styled-components'
import Box, {BoxProps} from '../Box'

const dropdownItemActive = (props: {active?: boolean}) =>
  props.active &&
  css`
    text-decoration: none;
  `

const dropdownItemDisabled = (props: {disabled?: boolean}) =>
  props.disabled &&
  css`
    background-color: transparent;
  `

interface IDropdownItem extends BoxProps {
  active?: boolean
  disabled?: boolean
}

const DropdownItem = styled(Box)<IDropdownItem>`
  clear: both;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  &:hover,
  &:focus {
    text-decoration: none;
  }
  ${props => dropdownItemActive(props)};
  ${props => dropdownItemDisabled(props)};
`

export default DropdownItem
