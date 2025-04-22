import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

const { width } = Dimensions.get('window');

// Sample food data with image URLs and recipe placeholder
const foodItems = [
  {
    id: '1',
    title: 'Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60',
    recipe: 'Grilled chicken recipe...',
  },
  {
    id: '2',
    title: 'Avocado Salad',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60',
    recipe: 'these areb the most recommended foods fdor all diabetic people and you are highly urged to eat as long as as you have type A diabetes',
  },
  {
    id: '3',
    title: 'Pasta Carbonara',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60',
    recipe: 'Pasta carbonara recipe...',
  },
  {
    id: '4',
    title: 'Fruit Smoothie',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60',
    recipe: 'Fruit smoothie recipe...',
  },
];

const FoodScreen = () => {
  const animatedValues = useRef(foodItems.map(() => new Animated.Value(width))).current;

  useEffect(() => {
    const animations = animatedValues.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 0,
        duration: 500,
        delay: index * 200,
        useNativeDriver: true,
      })
    );

    Animated.stagger(200, animations).start();
  }, []);

  const handleRecipePress = (title, recipe) => {
    Alert.alert(title, recipe); // Placeholder – you can later navigate to a recipe screen
  };

  const renderItem = ({ item, index }) => (
    <Animated.View style={[styles.card, { transform: [{ translateX: animatedValues[index] }] }]}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <Text style={styles.cardText}>{item.title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRecipePress(item.title, item.recipe)}
      >
        <Text style={styles.buttonText}>View Recipe</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Food Menu</Text>

      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6f0',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#4e342e',
  },
  card: {
    backgroundColor: '#ffe0b2',
    padding: 16,
    marginVertical: 10,
    borderRadius: 16,
    elevation: 3,
    alignItems: 'center',
  },
  foodImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3e2723',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8d6e63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FoodScreen;
