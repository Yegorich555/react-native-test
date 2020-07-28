import React from 'react';
import { Image } from 'react-native';
import imgLogo from '@images/logo.png';
import { useMyTheme } from '@/theme/useMyTheme';

export default function HomeHeaderTitle() {
  const { theme } = useMyTheme();

  return (
    <Image source={imgLogo} style={{ tintColor: theme.colors.headerTitle }} />
  );
}
