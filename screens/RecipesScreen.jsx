import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const getYoutubeThumbnail = (url) => {
  const regex = /[?&]v=([^&#]+)/;
  const match = url.match(regex);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '';
};

// === Sample of 30 recipes (10 per category) ===
const recipeData = [
  // === BREAKFAST ===
  {
    id: '1',
    name: 'Oatmeal Delight',
    video: 'https://www.youtube.com/watch?v=3MJYdBVzN3Y',
    description: 'Warm oats with fruits & cinnamon.',
    suitableFor: ['Type 2'],
    category: 'Breakfast',
    calories: 260,
    carbs: '22g',
  },
  {
    id: '2',
    name: 'Avocado Toast',
    video: 'https://www.youtube.com/watch?v=aZxuK0dJCSM',
    description: 'Whole wheat toast with avocado.',
    suitableFor: ['Type 1', 'Type 2'],
    category: 'Breakfast',
    calories: 280,
    carbs: '15g',
  },
  {
    id: '3',
    name: 'Veggie Omelette',
    video: 'https://www.youtube.com/watch?v=67EoPykdSw0',
    description: 'Egg omelette with bell peppers.',
    suitableFor: ['Type 1', 'Gestational'],
    category: 'Breakfast',
    calories: 220,
    carbs: '6g',
  },
  {
    id: '4',
    name: 'Smoothie Bowl',
    video: 'https://www.youtube.com/watch?v=3z1DLV4K2F4',
    description: 'Low-sugar fruit smoothie with nuts.',
    suitableFor: ['Gestational'],
    category: 'Breakfast',
    calories: 190,
    carbs: '18g',
  },
  {
    id: '5',
    name: 'Boiled Eggs & Veggies',
    video: 'https://www.youtube.com/watch?v=SmV5Y0cXbhE',
    description: 'Protein-rich quick breakfast.',
    suitableFor: ['Type 2'],
    category: 'Breakfast',
    calories: 200,
    carbs: '2g',
  },
  {
    id: '6',
    name: 'Greek Yogurt & Chia',
    video: 'https://www.youtube.com/watch?v=TwRZxvUurvE',
    description: 'Yogurt topped with chia seeds.',
    suitableFor: ['All'],
    category: 'Breakfast',
    calories: 150,
    carbs: '10g',
  },
  {
    id: '7',
    name: 'Spinach Mushroom Toast',
    video: 'https://www.youtube.com/watch?v=UZtvYGilUR0',
    description: 'Sautéed spinach on toast.',
    suitableFor: ['Type 2'],
    category: 'Breakfast',
    calories: 170,
    carbs: '12g',
  },
  {
    id: '8',
    name: 'Coconut Pancakes',
    video: 'https://www.youtube.com/watch?v=J-w5l5UPpU4',
    description: 'Low-carb coconut flour pancakes.',
    suitableFor: ['Type 1'],
    category: 'Breakfast',
    calories: 240,
    carbs: '13g',
  },
  {
    id: '9',
    name: 'Chia Seed Pudding',
    video: 'https://www.youtube.com/watch?v=xZ7b_XsPNgY',
    description: 'Refrigerated chia seed meal.',
    suitableFor: ['Gestational'],
    category: 'Breakfast',
    calories: 160,
    carbs: '8g',
  },
  {
    id: '10',
    name: 'Almond Butter Toast',
    video: 'https://www.youtube.com/watch?v=9dbnkgDciTg',
    description: 'Toasted bread with almond butter.',
    suitableFor: ['All'],
    category: 'Breakfast',
    calories: 290,
    carbs: '17g',
  },

  // === LUNCH ===
  {
    id: '11',
    name: 'Grilled Chicken Salad',
    video: 'https://www.youtube.com/watch?v=ZfAEPhRRU90',
    description: 'Chicken with veggies & olive oil.',
    suitableFor: ['Type 1'],
    category: 'Lunch',
    calories: 330,
    carbs: '10g',
  },
  {
    id: '12',
    name: 'Quinoa Bowl',
    video: 'https://www.youtube.com/watch?v=yKNxeF4KMsY',
    description: 'Quinoa with black beans and corn.',
    suitableFor: ['All'],
    category: 'Lunch',
    calories: 360,
    carbs: '26g',
  },
  {
    id: '13',
    name: 'Stuffed Peppers',
    video: 'https://www.youtube.com/watch?v=ve1B-wmLs9s',
    description: 'Bell peppers filled with veggies.',
    suitableFor: ['Gestational'],
    category: 'Lunch',
    calories: 300,
    carbs: '18g',
  },
  {
    id: '14',
    name: 'Zucchini Lasagna',
    video: 'https://www.youtube.com/watch?v=6eFev3V5TDk',
    description: 'Lasagna using zucchini slices.',
    suitableFor: ['Type 2'],
    category: 'Lunch',
    calories: 310,
    carbs: '14g',
  },
  {
    id: '15',
    name: 'Turkey Lettuce Wraps',
    video: 'https://www.youtube.com/watch?v=xDMP3i36naA',
    description: 'Wraps using lettuce instead of bread.',
    suitableFor: ['All'],
    category: 'Lunch',
    calories: 270,
    carbs: '7g',
  },
  {
    id: '16',
    name: 'Cucumber Tuna Salad',
    video: 'https://www.youtube.com/watch?v=7wrB4Iu3LxU',
    description: 'Cool tuna with sliced cucumber.',
    suitableFor: ['Type 2'],
    category: 'Lunch',
    calories: 250,
    carbs: '4g',
  },
  {
    id: '17',
    name: 'Broccoli Stir Fry',
    video: 'https://www.youtube.com/watch?v=6mgQ5p1b6vo',
    description: 'Simple broccoli in garlic oil.',
    suitableFor: ['All'],
    category: 'Lunch',
    calories: 210,
    carbs: '10g',
  },
  {
    id: '18',
    name: 'Eggplant Curry',
    video: 'https://www.youtube.com/watch?v=PU5xxh5UX4U',
    description: 'Spicy curry with eggplant chunks.',
    suitableFor: ['Gestational'],
    category: 'Lunch',
    calories: 280,
    carbs: '15g',
  },
  {
    id: '19',
    name: 'Tofu Wraps',
    video: 'https://www.youtube.com/watch?v=zAgNwQnXc4s',
    description: 'Tofu and veggies in a wrap.',
    suitableFor: ['Type 1'],
    category: 'Lunch',
    calories: 320,
    carbs: '18g',
  },
  {
    id: '20',
    name: 'Green Bean Chicken',
    video: 'https://www.youtube.com/watch?v=NLy4cvRx7Vc',
    description: 'Pan-cooked beans with grilled chicken.',
    suitableFor: ['All'],
    category: 'Lunch',
    calories: 310,
    carbs: '11g',
  },

  // === SUPPER ===
  {
    id: '21',
    name: 'Baked Salmon & Asparagus',
    video: 'https://www.youtube.com/watch?v=VRyyxRgPVAM',
    description: 'Oven-roasted fish and greens.',
    suitableFor: ['All'],
    category: 'Supper',
    calories: 400,
    carbs: '6g',
  },
  {
    id: '22',
    name: 'Vegetable Soup',
    video: 'https://www.youtube.com/watch?v=Iiz9QwRxSGk',
    description: 'Light and easy veggie soup.',
    suitableFor: ['Type 1'],
    category: 'Supper',
    calories: 150,
    carbs: '12g',
  },
  {
    id: '23',
    name: 'Cauliflower Rice Bowl',
    video: 'https://www.youtube.com/watch?v=_KBoU6XWfEk',
    description: 'Low-carb rice substitute with meat.',
    suitableFor: ['Type 2'],
    category: 'Supper',
    calories: 190,
    carbs: '9g',
  },
  {
    id: '24',
    name: 'Mushroom Skillet',
    video: 'https://www.youtube.com/watch?v=VY8I9HhW2nc',
    description: 'Pan-cooked mushrooms and onions.',
    suitableFor: ['All'],
    category: 'Supper',
    calories: 220,
    carbs: '5g',
  },
  {
    id: '25',
    name: 'Tuna & Beans',
    video: 'https://www.youtube.com/watch?v=1N1G3-a5hT8',
    description: 'High protein, low sugar.',
    suitableFor: ['Type 1', 'Gestational'],
    category: 'Supper',
    calories: 290,
    carbs: '8g',
  },
  {
    id: '26',
    name: 'Baked Tilapia',
    video: 'https://www.youtube.com/watch?v=g7zGZyxj1d8',
    description: 'Oven baked white fish fillet.',
    suitableFor: ['Type 2'],
    category: 'Supper',
    calories: 330,
    carbs: '3g',
  },
  {
    id: '27',
    name: 'Kale & Carrot Stew',
    video: 'https://www.youtube.com/watch?v=cZKOGwXO9fM',
    description: 'Stew with vitamin-rich veggies.',
    suitableFor: ['All'],
    category: 'Supper',
    calories: 200,
    carbs: '11g',
  },
  {
    id: '28',
    name: 'Egg Fried Cabbage',
    video: 'https://www.youtube.com/watch?v=PBsbVwSMUoU',
    description: 'Low-carb, savory side meal.',
    suitableFor: ['Type 2'],
    category: 'Supper',
    calories: 210,
    carbs: '6g',
  },
  {
    id: '29',
    name: 'Bitter Gourd Fry',
    video: 'https://www.youtube.com/watch?v=FeTAFLGS_qs',
    description: 'Bitter melon cooked with onions.',
    suitableFor: ['Gestational'],
    category: 'Supper',
    calories: 180,
    carbs: '7g',
  },
  {
    id: '30',
    name: 'Grilled Eggplant Slices',
    video: 'https://www.youtube.com/watch?v=owHfzjzxI4A',
    description: 'Charred eggplant with garlic.',
    suitableFor: ['Type 1'],
    category: 'Supper',
    calories: 210,
    carbs: '9g',
  },
];

const RecipeCard = ({ recipe }) => (
  <View style={styles.card}>
    <TouchableOpacity onPress={() => Linking.openURL(recipe.video)}>
      <Image
        source={{ uri: getYoutubeThumbnail(recipe.video) }}
        style={styles.thumbnail}
      />
    </TouchableOpacity>
    <Text style={styles.title}>{recipe.name}</Text>
    <Text style={styles.description}>{recipe.description}</Text>
    <Text style={styles.nutrition}>Calories: {recipe.calories} | Carbs: {recipe.carbs}</Text>
    <Text style={styles.chef}>Added by Chef Wamimbi</Text>
  </View>
);

const RecipesScreen = ({ route }) => {
  const { diabetesType } = route.params;
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRecipes = recipeData.filter(
    (recipe) =>
      recipe.suitableFor.includes(diabetesType) &&
      (selectedCategory === 'All' || recipe.category === selectedCategory) &&
      (recipe.name.toLowerCase().includes(searchText.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchText.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipes for {diabetesType} Diabetes</Text>

      <TextInput
        placeholder="Search recipes..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
      />

      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="All Categories" value="All" />
        <Picker.Item label="Breakfast" value="Breakfast" />
        <Picker.Item label="Lunch" value="Lunch" />
        <Picker.Item label="Supper" value="Supper" />
      </Picker>

      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.noRecipes}>No recipes found.</Text>}
      />
    </View>
  );
};

const cardWidth = Dimensions.get('window').width / 2 - 20;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e0f7fa', padding: 10 },
  heading: { fontSize: 20, fontWeight: '600', marginBottom: 10, textAlign: 'center' },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 8,
  },
  picker: {
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
  },
  list: { paddingBottom: 20 },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    margin: 5,
    width: cardWidth,
    elevation: 2,
  },
  thumbnail: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 },
  description: { fontSize: 13, color: '#555', marginBottom: 4 },
  nutrition: { fontSize: 12, color: '#444', marginBottom: 4 },
  chef: { fontStyle: 'italic', fontSize: 12, color: '#888' },
  noRecipes: { textAlign: 'center', color: '#888', marginTop: 30, fontSize: 16 },
});

export default RecipesScreen;
