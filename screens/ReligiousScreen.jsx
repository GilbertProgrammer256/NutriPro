

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReligiousScreen = () => {
  const navigation = useNavigation();

  const handleSelectUnit = (unit) => {
    navigation.navigate('Device');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which Religion are you?</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Christian')}>
        <Text style={styles.buttonText}>Christian</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('Moslem')}>
        <Text style={styles.buttonText}>Moslem</Text>
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

export default ReligiousScreen;
