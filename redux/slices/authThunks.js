
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
} from './authSlice';
import { loginUser, registerUser } from '../../api/auth';

export const loginThunk = (email, password) => async dispatch => {
  try {
    dispatch(loginRequest());
    const data = await loginUser(email, password);
    console.log('data',data)
    await AsyncStorage.setItem('token', data.token);
    dispatch(loginSuccess(data.token));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.error || 'Login failed'));
  }
};

export const signupThunk = (name, email, password) => async dispatch => {
  try {
    dispatch(signupRequest());
    const data = await registerUser(name, email, password);
    await AsyncStorage.setItem('token', data.token);
    dispatch(signupSuccess(data.token));
  } catch (error) {
    dispatch(signupFailure(error.response?.data?.error || 'Signup failed'));
  }
};
