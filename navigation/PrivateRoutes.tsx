
 import React from 'react'
import FoodScreen from '../screens/FoodScreen'
import DiabetesDetailsScreen from '../screens/DiabetesDetailsScreen'
import DashboardScreen from '../screens/DashboardScreen'
import FitnessScreen from '../screens/FitnessScreen'
import AboutScreen from '../screens/AboutScreen'
import MarqueeCards from '../screens/MarqueeCards'
import HealthTipsScreen from '../screens/HealthTipsScreen'
import RecipesScreen from '../screens/RecipesScreen'
import DiabetesTypeScreen from '../screens/DiabetesTypeScreen'
import ArticlesScreen from '../screens/ArticlesScreen'
import AddScreen from '../screens/AddScreen'
import TypeScreen from '../screens/TypeScreen'
import QuestionScreen from '../screens/QuestionScreen'
import UnitsScreen from '../screens/UnitsScreen'
import ReligiousScreen from '../screens/ReligiousScreen'
import DeviceScreen from '../screens/DeviceScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
 const Stack = createNativeStackNavigator();
 const PrivateRoutes = () => {
   return (
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="FoodScreen" component={FoodScreen} options={{headerShown:true}} />
        <Stack.Screen name="DiabetesDetailsScreen" component={DiabetesDetailsScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={DashboardScreen} options={{headerShown:false}} />
        <Stack.Screen name="FitnessScreen" component={FitnessScreen} options={{headerShown:false}} />
        <Stack.Screen name="About" component={AboutScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Cards" component={MarqueeCards} options={{headerShown:false}}/>
        <Stack.Screen name="Tips" component={HealthTipsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Recipes" component={RecipesScreen} options={{headerShown:false}}/>  
        <Stack.Screen name="Diabetestype" component={DiabetesTypeScreen} options={{headerShown:false}}/>    
        <Stack.Screen name="Articles" component={ArticlesScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Add" component={AddScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Type" component={TypeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Question" component={QuestionScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Units" component={UnitsScreen} options={{headerShown:false}}/>
         <Stack.Screen name="Religious" component={ReligiousScreen} options={{headerShown:false}}/>
         <Stack.Screen name="Device" component={DeviceScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
   )
 }
 
 export default PrivateRoutes