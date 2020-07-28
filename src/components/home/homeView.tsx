import React from 'react';
import { StyleSheet, View, Text, Button, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from '../navigation/navigationParams';
import { useMyTheme } from '@/theme/useMyTheme';

type Props = StackScreenProps<NavigationParams, 'Home'>;

export default function HomeView({ navigation }: Props) {
  const { theme } = useMyTheme();
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.Header.backgroundColor}
        barStyle="light-content"
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <Text>Home page</Text>
          <Button
            title="Go to Savings"
            // use 'push' to open a new one: onPress={() => navigation.push('Details')}
            onPress={() => navigation.navigate('Savings')}
          />
          <Button
            title="Go to Checking"
            onPress={() => navigation.navigate('Checking')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
