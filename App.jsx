import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import FoodScreen from './screens/FoodScreen';
import DiabetesDetailsScreen from './screens/DiabetesDetailsScreen';
import DashboardScreen from './screens/DashboardScreen';
import FitnessScreen from './screens/FitnessScreen';
import AboutScreen from './screens/AboutScreen';
import MarqueeCards from './screens/MarqueeCards';
import HealthTipsScreen from './screens/HealthTipsScreen';
import RecipesScreen from './screens/RecipesScreen';
import DiabetesTypeScreen from './screens/DiabetesTypeScreen';
import ArticlesScreen from './screens/ArticlesScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />  
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
        <Stack.Screen name="FoodScreen" component={FoodScreen} options={{headerShown:true}} />
        <Stack.Screen name="DiabetesDetailsScreen" component={DiabetesDetailsScreen} options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown:false}} />
        <Stack.Screen name="FitnessScreen" component={FitnessScreen} options={{headerShown:false}} />
        <Stack.Screen name="About" component={AboutScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Cards" component={MarqueeCards} options={{headerShown:false}}/>
        <Stack.Screen name="Tips" component={HealthTipsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Recipes" component={RecipesScreen} options={{headerShown:false}}/>  
        <Stack.Screen name="Diabetestype" component={DiabetesTypeScreen} options={{headerShown:false}}/>    
        <Stack.Screen name="Articles" component={ArticlesScreen} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
