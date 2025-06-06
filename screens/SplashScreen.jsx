import React, {useEffect} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} // Place animation JSON in assets folde
        style={styles.animation}
      />
      <Text style={styles.text}>NutriPro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  animation: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
});

export default SplashScreen;
