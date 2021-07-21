import '@fontsource/poppins/500.css';

export interface ITheme {
  colors: { primary: string; secondary: string };
  fontSizes: {
    h1: number | string;
    h2: number | string;
    h3: number | string;
    p: number | string;
    small: number | string;
  };
  lineHeights: {
    h1: number;
    h2: number;
    h3: number;
    p: number;
    small: number;
  };
  fonts: { body: string };
  fontWeights: { medium: number };
  space: (number | string)[];
}

export const yaydooTheme: ITheme = {
  colors: { primary: '#8159d9', secondary: '#5ce2e2' },
  fontSizes: {
    h1: '2rem',
    h2: '1.5rem',
    h3: '1.25rem',
    p: '1rem',
    small: '0.75rem',
  },
  lineHeights: {
    h1: 1,
    h2: 1.125,
    h3: 1.25,
    p: 1.5,
    small: 1.75,
  },
  fonts: { body: 'Poppins, sans-serif' },
  fontWeights: { medium: 500 },
  space: [
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1,5rem',
    '1.75rem',
    '2rem',
    '2.25rem',
    '2.5rem',
    '2.75rem',
    '3rem',
  ],
};
