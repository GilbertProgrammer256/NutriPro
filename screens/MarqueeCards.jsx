import React, { useRef, useEffect } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const cards = [
  { id: 1, title: 'Stay Hydrated 💧' },
  { id: 2, title: 'Track Your Meals 🥗' },
  { id: 3, title: 'Monitor Blood Sugar 🩸' },
  { id: 4, title: 'Get Daily Tips 💡' },
  { id: 5, title: 'NutriPro Cares 💙' },
];

const MarqueeCards = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopAnimation = () => {
      scrollX.setValue(screenWidth); // start from right edge

      Animated.timing(scrollX, {
        toValue: -screenWidth * 2, // move past left edge
        duration: 10000,
        useNativeDriver: true,
      }).start(() => loopAnimation()); // loop forever
    };

    loopAnimation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.marqueeContainer,
          {
            transform: [{ translateX: scrollX }],
          },
        ]}
      >
        {[...cards, ...cards].map((card, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>{card.title}</Text>
            


          </View>
        ))}
      </Animated.View>

<View style={styles.vaa} >

<TouchableOpacity 
  style={[styles.fitnessCard]} 
 
  onPress={() => navigation.navigate('FitnessScreen')}
>  <Text> GO TO FITNESS</Text></TouchableOpacity>

<TouchableOpacity 
  style={[styles.fitnessCard]} 
 
  onPress={() => navigation.navigate('FitnessScreen')}
>  <Text> GO TO FITNESS</Text></TouchableOpacity><TouchableOpacity 
  style={[styles.fitnessCard]} 
 
  onPress={() => navigation.navigate('FitnessScreen')}
>  <Text> HEALTH TIPS</Text></TouchableOpacity><TouchableOpacity 
  style={[styles.fitnessCard]} 
 
  onPress={() => navigation.navigate('FitnessScreen')}
>  <Text> GO TO FITNESS</Text></TouchableOpacity>


</View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    overflow: 'hidden',
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    paddingTop:20,
    gap:20,
  },
  fitnessCard: {
    backgroundColor: '#004d40',
    height:180,
    width:"60%",
    padding:30,
    borderRadius:10,
    left:10,
    // textAlign:"center",
    // justifyContent:"center",
    // alignItems:"center",
  },
  marqueeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top:60,
    backgroundColor:"#047904",
    width:"auto",
  },
  card: {
    backgroundColor: '#A7F3D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  vaa:{
    display:"flex",
    flexDirection:"column",
    gap:2,
    alignItems:"center",
    paddingTop:40,

  },
  cardText: {
    color: '#065F46',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default MarqueeCards;
