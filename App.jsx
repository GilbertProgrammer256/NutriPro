import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import AddScreen from './screens/AddScreen';
import TypeScreen from './screens/TypeScreen';
import QuestionScreen from './screens/QuestionScreen';
import UnitsScreen from './screens/UnitsScreen';
import ReligiousScreen from './screens/ReligiousScreen';
import DeviceScreen from './screens/DeviceScreen';
import AppNav from './navigation/AppNav';
import {Provider} from 'react-redux';
import {store} from './redux/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};

export default App;
