

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DeviceScreen = () => {
  const navigation = useNavigation();

  const handleSelectUnit = (unit) => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Do you wear a glucose sensor?</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Christian')}>
        <Text style={styles.buttonText}>Enlight sensor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Moslem')}>
        <Text style={styles.buttonText}>Eversense Sensor</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Christian')}>
    <Text style={styles.buttonText}>Freestyle Libre</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Moslem')}>
    <Text style={styles.buttonText}>Freestyle Navigator II</Text>
  </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Christian')}>
    <Text style={styles.buttonText}>G4</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Moslem')}>
    <Text style={styles.buttonText}>G5</Text>
  </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Christian')}>
    <Text style={styles.buttonText}>G6</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Moslem')}>
    <Text style={styles.buttonText}>G7</Text>
  </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});

export default DeviceScreen;

