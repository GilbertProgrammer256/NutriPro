import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const healthTips = [
  {
    id: 1,
    title: 'Stay Hydrated',
    body: 'Drink at least 8 glasses of water a day. It helps regulate blood sugar levels and keeps your body functioning optimally.',
    nutritionist: 'Dr. Grace Akena',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    title: 'Eat Complex Carbs',
    body: 'Switch from white bread to whole grains. They digest slower, preventing sudden blood sugar spikes.',
    nutritionist: 'Dr. Moses Katongole',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    title: 'Plan Your Meals',
    body: 'Meal planning prevents overeating and helps balance your glucose levels effectively throughout the day.',
    nutritionist: 'Dr. Agnes Nabwire',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const HealthTipsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🩺 Daily Health Tips</Text>
      {healthTips.map((tip) => (
        <View key={tip.id} style={styles.card}>
          <Text style={styles.title}>{tip.title}</Text>
          <Text style={styles.body}>{tip.body}</Text>
          <View style={styles.authorContainer}>
            <Image source={{ uri: tip.image }} style={styles.avatar} />
            <Text style={styles.name}>~ {tip.nutritionist}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ECFDF5',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#065F46',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#D1FAE5',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#047857',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#065F46',
    lineHeight: 22,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 15,
    color: '#047857',
    fontStyle: 'italic',
  },
});

export default HealthTipsScreen;
