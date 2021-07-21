import styled from '@emotion/styled';
import { HTMLAttributes, ReactChild } from 'react';
import { variant } from 'styled-system';

import { ITheme } from '../themes';

export type TextVariants = 'h1' | 'h2' | 'h3' | 'p' | 'small';

export interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * The text to be displayed.
   */
  children: ReactChild;
  /**
   * Determines the importance of the test to be displayed.
   */
  variant?: TextVariants;
  /**
   * The `theme` object passed down via the `YaydooKitProvider`.
   */
  theme?: ITheme;
}

export const Text = styled('p')<ITextProps>((props) =>
  variant({
    variants: {
      h1: {
        fontSize: props.theme.fontSizes.h1,
        lineHeight: props.theme.lineHeights.h1,
      },
      h2: {
        fontSize: props.theme.fontSizes.h2,
        lineHeight: props.theme.lineHeights.h2,
      },
      h3: {
        fontSize: props.theme.fontSizes.h3,
        lineHeight: props.theme.lineHeights.h3,
      },
      p: {
        fontSize: props.theme.fontSizes.p,
        lineHeight: props.theme.lineHeights.p,
      },
      small: {
        fontSize: props.theme.fontSizes.small,
        lineHeight: props.theme.lineHeights.small,
      },
    },
  })
);

Text.defaultProps = {
  as: 'p',
  variant: 'p',
};
