import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screen/Home';
import Reminder from './src/screen/Reminder';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2A4750',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{title: 'Singapore'}}
        />
        <Stack.Screen
          name="ReminderScreen"
          component={Reminder}
          options={{title: 'Reminder'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
