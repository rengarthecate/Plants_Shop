import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ImageSelectScreen from '../components/user/PickGender';
import GoalPick from '../components/user/Goal';
import BMICalculator from '../components/user/BMI';
import SplashScreen from '../components/user/SplashScreen';
import HomeScreen from '../components/user/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{
                headerShown: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <Stack.Screen name="Gender" component={ImageSelectScreen} />
                <Stack.Screen name="BMI" component={BMICalculator} />
                <Stack.Screen name="Goal" component={GoalPick} />
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
