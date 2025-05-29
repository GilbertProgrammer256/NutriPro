import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AddScreen = ({navigation}) => {
  const [meal, setMeal] = useState('');
  const [dietNote, setDietNote] = useState('');
  const [medicine, setMedicine] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [advice, setAdvice] = useState('');

  const generateAdvice = () => {
    let generated = '🧠 AI Health Advice:\n';

    if (symptoms.toLowerCase().includes('fatigue')) {
      generated += '- You may need to rest and check your blood sugar.\n';
    }
    if (symptoms.toLowerCase().includes('blurred vision')) {
      generated += '- This may be a sign of high blood sugar. Monitor levels.\n';
    }
    if (dietNote.toLowerCase().includes('sweet')) {
      generated += '- Consider reducing sugar intake immediately.\n';
    }
    if (medicine.toLowerCase().includes('missed')) {
      generated += '- Resume your medication and consult a doctor.\n';
    }

    if (generated === '🧠 AI Health Advice:\n') {
      generated += 'Your current condition seems stable. Keep monitoring your health!';
    }

    setAdvice(generated);
  };

  const handleSubmit = () => {
    if (!meal && !dietNote && !medicine && !symptoms) {
      Alert.alert('Please fill in at least one field.');
      return;
    }
    generateAdvice();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Health Info</Text>

      <Text style={styles.label}>Today's Meal (e.g. Millet porridge, greens)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your meal..."
        value={meal}
        onChangeText={setMeal}
      />

      <Text style={styles.label}>Custom Diet Notes</Text>
      <TextInput
        style={styles.input}
        placeholder="Any changes or cultural foods?"
        value={dietNote}
        onChangeText={setDietNote}
      />

      <Text style={styles.label}>Medication Taken</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Metformin, Insulin"
        value={medicine}
        onChangeText={setMedicine}
      />

      <Text style={styles.label}>Symptoms / Signs</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Fatigue, dizziness, frequent urination"
        value={symptoms}
        onChangeText={setSymptoms}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Submit & Get Advice</Text>
      </TouchableOpacity>

      {advice ? (
        <View style={styles.adviceBox}>
          <Text style={styles.adviceText}>{advice}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontWeight: '600', marginTop: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 25,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  adviceBox: {
    backgroundColor: '#e0f7e9',
    marginTop: 30,
    padding: 15,
    borderRadius: 8,
  },
  adviceText: { color: '#155724', fontWeight: '600' },
});

export default AddScreen;
