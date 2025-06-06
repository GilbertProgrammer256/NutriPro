import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';





import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { loginSuccess } from '../redux/slices/authSlice';

const AppNav = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    checkStoredToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkStoredToken = async () => {
    const storedToken = await AsyncStorage.getItem('authToken');
    console.log('storedToken', storedToken);
    if (storedToken) {
      // If token exists in AsyncStorage, set it in Redux store
      dispatch(loginSuccess(storedToken));
    }
  };
  return (
    <NavigationContainer>
      {token !== null ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default AppNav;