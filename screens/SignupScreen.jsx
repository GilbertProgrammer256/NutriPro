import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signupThunk } from '../redux/slices/authThunks';
 // adjust path

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const { isLoading, error, token } = useSelector(state => state.auth);

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    dispatch(signupThunk(name, email, password));
  };

  useEffect(() => {
    if (token) {
      navigation.navigate('Type');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <ImageBackground
      source={require('../assets/logo.png')}
      style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>NutriPro</Text>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>LIVE A HEALTH LIFE</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#ddd"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ddd"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ddd"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#ddd"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {error && <Text style={styles.errorText}>{error}</Text>}

          {isLoading ? (
            <ActivityIndicator color="#4CAF50" size="large" />
          ) : (
            <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
              <Text style={styles.signupText}>Create</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(10, 10, 10, 0.1)',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    marginBottom: 15,
  },
  signupButton: {
    backgroundColor: '#334533',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#4CAF50',
    marginTop: 15,
    textAlign: 'center',
  },
  errorText: {
    color: '#f44336',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SignupScreen;
