import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60',
          }}
          style={styles.headerImage}
        />
        <Text style={styles.title}>About NutriPro</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.paragraph}>
          🌿NutriPro is your personalized digital companion designed to support individuals managing diabetes. Whether you're newly diagnosed or have been living with diabetes for years, NutriPro brings tailored nutritional guidance and lifestyle tips right to your fingertips.
        </Text>

        <Text style={styles.paragraph}>
          📱 The app provides:
          {"\n"} 🥗 Smart Meal recommendations
          {"\n"} 🧠 Educational content on diabetes care
          {"\n"} 📍 Real-time location-aware food insights
          {"\n"} 🩺 Health reminders and alerts
          {"\n"} 👨‍⚕️ Connection to nearby health support
        </Text>

        <Text style={styles.paragraph}>
          NutriPro aims to simplify and enhance the way diabetic individuals interact with their health, helping them live fuller, healthier lives. It’s not just an app — it’s a movement towards **digital health empowerment**. 💙
        </Text>

        <Text style={styles.footer}>Together, let’s End Diabetes.</Text>
      </View>
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#8DECB4',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    paddingBottom: 20,
    elevation: 5,
  },
  headerImage: {
    width: screenWidth,
    height: 200,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  title: {
    marginTop: 15,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#14532D',
  },
  contentContainer: {
    padding: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#374151',
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  footer: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    color: '#0F766E',
  },
});

export default AboutScreen;
