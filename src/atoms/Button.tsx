import styled from '@emotion/styled';
import { darken, readableColor, transparentize } from 'polished';
import { HTMLAttributes, ReactChild } from 'react';
import { variant } from 'styled-system';

import { ITheme } from '../themes';

export type ButtonVariants = 'primary' | 'subtle';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the button.
   */
  children: ReactChild;
  /**
   * Determines the importance of the action to be triggered.
   */
  variant?: ButtonVariants;
  /**
   * How big or small the button will be.
   */
  size?: ButtonSizes;
  /**
   * If `true`, the button will take up the full width of its container.
   */
  isFullWidth?: boolean;
  /**
   * The `theme` object passed down via the `YaydooKitProvider`.
   */
  theme?: ITheme;
  /**
   * It `true` no action will be triggered.
   */
  disabled?: boolean;
}

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
export const Button = styled('button')<IButtonProps>(
  {
    appearance: 'none',
    fontFamily: 'inherit',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
  (props) => ({
    width: props.isFullWidth ? '100%' : 'inherit',
  }),
  (props) => {
    return variant({
      variants: {
        primary: {
          backgroundColor: props.theme.colors.primary,
          color: readableColor(props.theme.colors.primary),
          '&:hover': {
            backgroundColor: darken(0.25, props.theme.colors.primary),
          },
          '&:disabled': {
            backgroundColor: transparentize(0.25, '#aaa'),
          },
        },
        subtle: {
          backgroundColor: 'transparent',
          color: 'inherit',
          '&:hover': {
            backgroundColor: transparentize(0.875, props.theme.colors.primary),
          },
          '&:disabled': {
            backgroundColor: transparentize(0.25, '#aaa'),
          },
        },
      },
    });
  },
  variant({
    prop: 'size',
    variants: {
      sm: {
        fontSize: '0.75rem',
        padding: '0.5rem 1rem',
      },
      md: {
        fontSize: '0.875rem',
        padding: '0.75rem 2rem',
      },
      lg: {
        fontSize: '1.125rem',
        padding: '1rem 2.75rem',
      },
    },
  })
);

Button.defaultProps = {
  as: 'button',
  size: 'md',
  variant: 'subtle',
  isFullWidth: false,
  disabled: false,
};
