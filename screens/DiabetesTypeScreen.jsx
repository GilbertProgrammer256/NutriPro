import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const diabetesTypes = ['Type 1', 'Type 2', 'Gestational'];

const DiabetesTypeScreen = ({ navigation }) => {
  const handleSelect = (type) => {
    navigation.navigate('Recipes', { diabetesType: type });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diabetes Type</Text>
      {diabetesTypes.map((type) => (
        <TouchableOpacity key={type} style={styles.button} onPress={() => handleSelect(type)}>
          <Text style={styles.buttonText}>{type}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button}>
  <Text style={styles.buttonText} onPress={() => navigation.navigate('Articles')}>Learn about Diabetes types</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 30 ,color:"#1e90ff"},
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: { color: 'white', fontSize: 16, textAlign: 'center' },
});

export default DiabetesTypeScreen;

