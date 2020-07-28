import { useContext } from 'react';
import { ThemeProps, ThemeContext } from 'react-native-elements';
import { defaultTheme } from './defaultTheme';

export function useMyTheme() {
  return useContext(ThemeContext) as ThemeProps<typeof defaultTheme>;
}
