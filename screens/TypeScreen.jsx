import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TypeScreen = () => {
  const navigation = useNavigation();

  const handleSelectType = (type) => {
    navigation.navigate('Question', { diabetesType: type });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What type of diabetes do you have?</Text>
      {['Type 1', 'Type 2', 'Type 3'].map((type) => (
        <TouchableOpacity
          key={type}
          style={styles.button}
          onPress={() => handleSelectType(type)}
        >
          <Text style={styles.buttonText}>{type}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2e86de',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TypeScreen;

