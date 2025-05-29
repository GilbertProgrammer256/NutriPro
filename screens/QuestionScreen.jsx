import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const QuestionScreen = ({navigation}) => {
  const route = useRoute();
  const { diabetesType } = route.params;

  const handleAnswer = (answer) => {
    console.log(`Diabetes Type: ${diabetesType}, Takes Pills: ${answer}`);
navigation.navigate("Units");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Do you take pills for your {diabetesType} diabetes?</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer('Yes')}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAnswer('No')}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
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
  buttonGroup: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#10ac84',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default QuestionScreen;

