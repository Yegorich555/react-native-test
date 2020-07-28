import React from 'react';
import { View, Text } from 'react-native';
import { useMyTheme } from '@/theme/useMyTheme';
import { StackHeaderTitleProps } from '@react-navigation/stack';

export default function CheckingHeaderTitle(props: StackHeaderTitleProps) {
  const { theme } = useMyTheme();
  return (
    <View
      {...props}
      style={{
        alignItems: 'center',
      }}>
      <Text style={{ color: theme.colors.headerTitle, fontSize: 18 }}>
        Checking
      </Text>
      <Text style={{ color: theme.colors.headerTitle, fontSize: 12 }}>
        Subtitle here
      </Text>
    </View>
  );
}
