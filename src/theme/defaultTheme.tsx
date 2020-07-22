import React from 'react';
import { ThemeProvider, Theme } from 'react-native-elements';

export const DefaultColors = {
  tabActiveLink: '#d73373', //rose
  tabInactiveLink: 'gray',
};

const theme: Theme = {
  Button: {
    raised: true,
  },
};

export default function DefaultThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
