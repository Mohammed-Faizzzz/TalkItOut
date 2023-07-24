import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ScreenOrientation from "expo-screen-orientation";

import  Login   from './screens/login';
import  Signup  from './screens/signup';


const Stack = createStackNavigator();

/**
 * Main component for the app.
 * 
 * @returns {React.ReactElement} The rendered component.
 */
export default function App() {

   /**
   * State for storing the current device orientation.
   * 
   * @type {number}
   */
  const [orientation, setOrientation] = useState(3);

  useEffect(() => {
    lockOrientation();
  }, []);

   /**
   * Locks the screen orientation to landscape right and updates the orientation state.
   * 
   * @returns {Promise<void>} A promise that resolves when the orientation is locked.
   */
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Login"
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

