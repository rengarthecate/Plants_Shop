import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../components/user/SplashScreen';
import HomeScreen from '../components/user/HomeScreen';
import HomeNavigate from '../components/user/HomeNavigate';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import Profile from '../components/user/Profile';
import OTP from '../components/user/OTP';
import ExerciseDetailScreen from '../components/user/ExerciseDetail';
import CollectInformationScreen from '../components/user/CollectInformationScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HistoryScreen from '../components/user/HistoryScreen';
import ReportScreen from '../components/user/ReportScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Tập luyện') {
                        return focused ?
                            <Icon name="brightness-high" size={size} color={color} /> :
                            <FontAwesome5 name="moon" size={size} color={color} />;
                    } else if (route.name === 'Profile') {
                        return focused ?
                            <FontAwesome5 name="user" size={size} color={color} /> :
                            <Icon name="account-circle" size={size} color={color} />;
                    } else if (route.name === 'History') {
                        return focused ?
                            <FontAwesome5 name="user" size={size} color={color} /> :
                            <Icon name="account-circle" size={size} color={color} />;
                    } else if (route.name === 'Report') {
                        return focused ?
                            <FontAwesome5 name="user" size={size} color={color} /> :
                            <Icon name="account-circle" size={size} color={color} />;
                    }
                },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Tập luyện" component={HomeScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Report" component={ReportScreen} />
            <Tab.Screen name="Profile" component={Profile} />



        </Tab.Navigator>
    );
};


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{
                headerShown: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="State" component={HomeNavigate} />
                <Stack.Screen name="HomeTabs" component={HomeTabs} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='OTP' component={OTP} />
                <Stack.Screen name='ExerciseDetail' component={ExerciseDetailScreen} />
                <Stack.Screen name='CollectInformation' component={CollectInformationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
