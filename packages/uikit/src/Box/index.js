import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  typography,
  position,
  order,
  borderRadius,
  flex,
  border,
  justifyContent,
  alignSelf,
  shadow
} from 'styled-system';

const BoxStyles = compose(
  space,
  color,
  layout,
  typography,
  position,
  borderRadius,
  order,
  flex,
  alignSelf,
  justifyContent,
  border,
  shadow
);

const Box = styled(BoxStyles)(BoxStyles);

Box.defaultProps = {
  as: 'div',
  css: {}
};

export default Box;
