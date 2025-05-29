
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UnitsScreen = () => {
  const navigation = useNavigation();

  const handleSelectUnit = (unit) => {
    navigation.navigate('Religious', { unit });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which units do you use?</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('mg/dL')}>
        <Text style={styles.buttonText}>mg/dL (milligrams per deciliter)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectUnit('mmol/L')}>
        <Text style={styles.buttonText}>mmol/L (millimoles per liter)</Text>
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

export default UnitsScreen;
