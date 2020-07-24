import React from 'react';
import { Image } from 'react-native';
import imgLogo from '@images/logo.png';
import { StackHeaderTitleProps } from '@react-navigation/stack';
import { DefaultColors } from '@/theme/defaultTheme';

export default function HomeHeader(props: StackHeaderTitleProps) {
  return (
    <Image
      source={imgLogo}
      style={{ tintColor: DefaultColors.tabActiveLink }}
    />
  );
}
