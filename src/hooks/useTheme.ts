import { useTheme as useEmotionTheme } from '@emotion/react';

import { ITheme } from '../themes';

export const useTheme = () => useEmotionTheme() as ITheme;
