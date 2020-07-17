import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './components/homeView';
import DetailsView from './components/detailsView';
import connectStore from './redux/connect';
import LoginView from './components/loginVIew';

const Stack = createStackNavigator();

interface NavigationInsideProps {
  isLogged: boolean;
}

function NavigationInside(props: NavigationInsideProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.isLogged ? (
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{ title: 'My home' }}
          />
        ) : (
          <LoginView />
        )}

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

const Navigation = connectStore((state) => ({ isLogged: !!state.userToken }))(
  NavigationInside,
);
export default Navigation;
