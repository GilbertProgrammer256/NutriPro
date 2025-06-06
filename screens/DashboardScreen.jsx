import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const { width } = Dimensions.get('window');

const DashboardScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📊 Dashboard</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={[styles.card, styles.homeCard]} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.cardText}>🏡 Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.fitnessCard]} onPress={() => navigation.navigate('FitnessScreen')}>
          <Text style={styles.cardText}>🏋️ Fitness</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.diabetesCard]} onPress={() => navigation.navigate('DiabetesDetailsScreen')}>
          <Text style={styles.cardText}>🩸 Diabetes Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.foodCard]} onPress={() => navigation.navigate('FoodScreen')}>
          <Text style={styles.cardText}>🍲 Food</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.weatherCard]} onPress={() => navigation.navigate('About')}>
          <Text style={styles.cardText}>🌤 About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.settingsCard]} onPress={() => navigation.navigate('Diabetestype')}>
          <Text style={styles.cardText}>⚙️ My Diet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.weatherCard]} onPress={() => navigation.navigate('Tips')}>
          <Text style={styles.cardText}>Health Tips</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.settingsCard]} onPress={() => navigation.navigate('Articles')}>
          <Text style={styles.cardText}>⚙️ Lets Go</Text>
        </TouchableOpacity>

        {/* 🚪 Logout Card */}
        <TouchableOpacity style={[styles.card, styles.logoutCard]} onPress={() => dispatch(logout())}>
          <Text style={styles.cardText}>🚪 Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 30,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 100, // ensures last card is visible
  },
  card: {
    width: width / 2 - 30,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  homeCard: {
    backgroundColor: '#00796b',
  },
  fitnessCard: {
    backgroundColor: '#004d40',
  },
  diabetesCard: {
    backgroundColor: '#0097a7',
  },
  foodCard: {
    backgroundColor: '#b2dfdb',
  },
  weatherCard: {
    backgroundColor: '#81c784',
  },
  settingsCard: {
    backgroundColor: '#0288d1',
  },
  logoutCard: {
    backgroundColor: '#d32f2f',
    width: '100%', // full-width logout button
  },
  cardText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
