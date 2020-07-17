import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from './components/homeView';
import DetailsView from './components/detailsView';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ title: 'My home' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsView}
          //todo use with params navigation.navigate('Details2', {name:})
          // options={({route}: {route: any}) => ({title: route.params?.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
