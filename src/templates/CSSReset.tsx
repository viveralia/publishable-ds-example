import { Global, GlobalProps } from '@emotion/react';
import { normalize } from 'polished';
import React, { FC } from 'react';

import { useTheme } from '../hooks';

/**
 * A normalize.css wrapper with some extra styles based on the theme provided. Use it just below `ThemeProvider`.
 */
export const CSSReset: FC = () => {
  const theme = useTheme();

  const globalStyles: GlobalProps['styles'] = {
    ...normalize(),
    body: {
      fontFamily: theme.fonts.body,
      fontSize: 16, // 1rem
    },
  };

  return <Global styles={globalStyles} />;
};
