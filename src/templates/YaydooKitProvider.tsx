import { ThemeProvider, ThemeProviderProps } from '@emotion/react';
import React, { FC, ReactChild } from 'react';

import { ITheme, yaydooTheme } from '../themes';

export interface IYaydooKitProviderProps
  extends Omit<ThemeProviderProps, 'theme'> {
  children: ReactChild;
  theme?: ITheme;
}

/**
 * The theme provider. Must be set on the root component.
 */
export const YaydooKitProvider: FC<IYaydooKitProviderProps> = ({
  children,
  theme = yaydooTheme,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
