import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FitnessScreen = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const userWeightKg = 70; // You can fetch this from user profile in future

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  // Time calculations
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const durationMin = timer / 60;

  // Fitness calculations
  const MET = 8; // moderate workout like jogging
  const caloriesBurned = ((MET * 3.5 * userWeightKg) / 200) * durationMin;
  const kilojoules = caloriesBurned * 4.184;
  const heartRateIncrease = Math.min(190, 70 + Math.floor(durationMin * 3));

  // Diabetes-related calculations
  const bloodSugarDrop = Math.max((caloriesBurned * 0.3), 0); // mg/dL
  const insulinBoost = Math.min((durationMin / 30) * 100, 100); // max 100%

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏃 Fitness Tracker</Text>

      <Text style={styles.timer}>
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#004d40' }]} onPress={stopTimer}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#0097a7' }]} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.metrics}>
        <Text style={styles.metric}>🔥 Calories Burned: {caloriesBurned.toFixed(1)} kcal</Text>
        <Text style={styles.metric}>⚡ Energy Used: {kilojoules.toFixed(1)} kJ</Text>
        <Text style={styles.metric}>❤️ Heart Rate:{heartRateIncrease} bpm</Text>
        <Text style={styles.metric}>🩸 Blood Sugar Drop: {bloodSugarDrop.toFixed(1)} mg/dL</Text>
        <Text style={styles.metric}>💪 Insulin Sensitivity Boost: {insulinBoost.toFixed(0)}%</Text>
        <Text style={styles.metric}>⚖️ Weight Support: {caloriesBurned >= 200 ? 'Yes ✅' : 'Not Yet ❌'}</Text>
      </View>

      <Text style={styles.tip}>
        🔹 Regular exercise helps prevent Type 2 Diabetes and supports insulin function.
      </Text>
      <Text style={styles.tip}>
        🔹 Burning at least 200 kcal boosts weight control and lowers your sugar risk.
      </Text>
      <Text style={styles.tip}>
        🔹 Even short sessions improve insulin sensitivity and heart health.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 30,
  },
  timer: {
    fontSize: 64,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#00796b',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  metrics: {
    backgroundColor: '#b2dfdb',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  metric: {
    fontSize: 18,
    color: '#004d40',
    marginBottom: 10,
  },
  tip: {
    fontSize: 14,
    color: '#00796b',
    marginTop: 8,
    fontStyle: 'italic',
  },
});

export default FitnessScreen;
