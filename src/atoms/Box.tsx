import styled from '@emotion/styled';
import {
  color,
  compose,
  layout,
  space,
  verticalAlign,
  width,
  zIndex,
} from 'styled-system';

export const Box = styled('div')(
  compose(color, layout, space, verticalAlign, width, zIndex)
);
