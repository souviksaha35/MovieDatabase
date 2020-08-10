/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import MovieDetailsScreen from './src/screen/MovieDetailsScreen';
import OfflineNotice from './src/component/OfflineNotics';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MovieDetail">
      <Stack.Screen name="MovieDetail" component={MovieDetailsScreen}/>
    </Stack.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <AppNavigator/>
      <OfflineNotice/>
    </NavigationContainer>
  )
}


export default App;
