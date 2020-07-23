import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from './navigation/navigationParams';

type Props = StackScreenProps<NavigationParams, 'Home'>;

export default function HomeView({ navigation }: Props) {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <Text>Some Text</Text>
            <Button
              title="Go Back"
              // use 'push' to open a new one: onPress={() => navigation.push('Details')}
              onPress={() => navigation.goBack}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
