import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
     

      <Image
        source={require('../assets/logo.png')}
          
        style={styles.heroImage}
        resizeMode="cover"
      />
      <Text style={styles.title}>NutriPro</Text>
      <Text style={styles.slogan}>Smart Nutrition for Diabetes Wellness</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonTextAlt}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 30,
  },
  slogan: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  heroImage: {
    width: 150,
    height: 150,
    borderRadius: 125,
    marginBottom: 50,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 15,
  },
  loginButton: {
    backgroundColor: '#00796b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  getStartedButton: {
    backgroundColor: '#b2dfdb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonTextAlt: {
    color: '#004d40',
    fontWeight: '600',
    fontSize: 16,
  },
});
