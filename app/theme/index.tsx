import React from 'react';
import { ThemeProvider, Theme } from 'react-native-elements';

const theme: Theme = {
  Button: {
    raised: true,
  },
};

export default function MyThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
