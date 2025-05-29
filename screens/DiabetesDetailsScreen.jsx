import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState,useEffect } from "react";
import axios from "axios";

const DiabetesDetailsScreen = () => {


  const user = {
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    diabetesType: 'Type 2',
    diagnosisDate: '2015-06-12',
  };

  const metrics = {
    lastFastingGlucose: '110 mg/dL',
    lastHbA1c: '6.8%',
    averageDailyCarbs: '180g',
    weight: '82 kg',
    height: '175 cm',
    bmi: '26.8',
  };

const [student,setStudent]= useState()
useEffect(()=>{
  async function getAllStudent() {
    try{
const students=await axios.get('http://127.0.0.1:8000/backend/student/')
console.log(students.data)
setStudent(students.data)
    }
    catch (error) {
console.log(error)
    }
  }
    getAllStudent()
  
},[] );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Diabetes Profile</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text style={styles.item}>Name: {user.name}</Text>
        <Text style={styles.item}>Age: {user.age}</Text>
        <Text style={styles.item}>Gender: {user.gender}</Text>
        <Text style={styles.item}>Diabetes Type: {user.diabetesType}</Text>
        <Text style={styles.item}>Diagnosis Date: {user.diagnosisDate}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Metrics</Text>
        <Text style={styles.item}>Fasting Glucose: {metrics.lastFastingGlucose}</Text>
        <Text style={styles.item}>HbA1c: {metrics.lastHbA1c}</Text>
        <Text style={styles.item}>Avg. Daily Carbs: {metrics.averageDailyCarbs}</Text>
        <Text style={styles.item}>Weight: {metrics.weight}</Text>
        <Text style={styles.item}>Height: {metrics.height}</Text>
        <Text style={styles.item}>BMI: {metrics.bmi}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f3f7f8',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#37474f',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#00796b',
  },
  item: {
    fontSize: 16,
    color: '#37474f',
    marginBottom: 6,
  },
});

export default DiabetesDetailsScreen;

