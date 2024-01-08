/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HalamanHome from './HalamanHome';
import DataDiri from './DataDiri';
import HalamanMaps from './HalamanMaps';
// import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HalamanHome} />
        <Tab.Screen name="DataDiri" component={DataDiri} />
        <Tab.Screen name="Maps" component={HalamanMaps} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;