import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsView({ navigation }) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
