import * as React from 'react'
import styled from 'styled-components'
import Box, {BoxProps} from '../Box'

enum TriggerEnum {
  CLICK = 'click',
  HOVER = 'hover',
}

interface IProps extends BoxProps {
  alwaysVisible?: boolean
  rightAlign?: boolean
  hidden?: boolean
  fullWidth?: boolean
  trigger?: TriggerEnum
  [propname: string]: any
}

const DropdownMenuBox = styled(Box)<IProps>`
  position: absolute;
  top: 100%;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  text-align: left;
  list-style: none;
  display: ${({hidden}) => (hidden ? 'none:' : 'block')};
  ${({fullWidth}) => (fullWidth ? 'min-width: 100%' : '')};
  ${({rightAlign}) => (rightAlign ? 'right: 0:' : 'left: 0')};
`

function DropdownMenu({
  children,
  alwaysVisible,
  hidden,
  toggle,
  trigger = TriggerEnum.HOVER,
  ...rest
}: IProps) {
  const container = React.createRef<HTMLDivElement>()

  React.useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const dom = container.current

      if (hidden || dom === null) {
        return
      }

      const containerParent = dom.parentNode

      if (
        containerParent !== null &&
        (containerParent === e.target || !containerParent.contains(e.target as Node)) &&
        dom !== e.target &&
        !dom.contains(e.target as Node)
      ) {
        toggle()
      }
    }
    const evName = trigger === TriggerEnum.HOVER ? 'mouseenter' : trigger
    document.addEventListener(evName, handleDocumentClick, true)
    return document.removeEventListener(evName, handleDocumentClick, true)
  }, [container, hidden, toggle, trigger])

  return (
    <DropdownMenuBox ref={container} hidden={!alwaysVisible && hidden} {...rest}>
      {children}
    </DropdownMenuBox>
  )
}

DropdownMenu.defaultProps = {
  hidden: false,
  toggle: /* istanbul ignore next */ () => {},
}

export default DropdownMenu
