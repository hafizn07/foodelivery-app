import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPasswordScreen, RegisterPhoneScreen, SigninScreen, SignupScreen, SplashScreen, VerificationScreen, WelcomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SigninScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="RegisterPhoneScreen" component={RegisterPhoneScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
