import React from 'react';
import { ThemeProvider, Theme } from 'react-native-elements';

type ExtraTheme = {
  colors: {
    tabActiveLink: string;
    tabInactiveLink: string;
    tabBackground: string;
    headerTitle: string;
    headerBackground: string;
  };
};

export const defaultTheme: Theme & ExtraTheme = {
  Button: {
    raised: true,
  },
  colors: {
    tabActiveLink: '#d73373', //rose
    tabInactiveLink: 'black',
    tabBackground: 'rgba(255, 255, 255, 0.5)',
    headerTitle: 'white',
    headerBackground: '#d73373',
  },
  Header: {
    backgroundColor: '#d73373',
    style: {
      alignItems: 'center',
    },
  },
};

export default function DefaultThemeProvider({ children }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
