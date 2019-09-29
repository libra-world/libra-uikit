import styled from 'styled-components'
import {
  borderRadius,
  BorderRadiusProps,
  buttonStyle,
  ButtonStyleProps,
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  variant,
} from 'styled-system'

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
})

interface IButtonProps extends BorderRadiusProps, ButtonStyleProps, SpaceProps, FontSizeProps {
  outline?: boolean
  glossy?: boolean
  bg?: string
  size?: string
}

const Button = styled('button')<IButtonProps>`
  ${borderRadius}
  ${buttonStyle}
  ${space}
  ${fontSize}
  ${buttonSize}
 border: 1px solid ${props => {
   console.log('props', props)
   return props.bg
 }};
  ${({disabled}) => (disabled ? 'cursor: not-allowed;' : 'cursor: pointer;')}
  // @ts-ignore
  ${({outline}) => (outline ? 'background: none' : '')};
  &:hover {
    ${({glossy, disabled}) => (glossy && !disabled ? `opacity:0.5;` : '')}
  }
`

export default Button
