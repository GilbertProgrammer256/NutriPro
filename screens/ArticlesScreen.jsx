import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';

const ArticlesScreen = ({navigation}) => {
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
        What is Diabetes?

Diabetes, also known as diabetes mellitus, is a group of metabolic disorders characterized by high blood sugar levels. This occurs when the body is unable to produce enough insulin, a hormone produced by the pancreas that regulates blood sugar levels, or when the body's cells become resistant to insulin.

 How Does Insulin Work?

 {"\n"}Insulin plays a crucial role in glucose metabolism. When you eat, your body breaks down carbohydrates into glucose, which is then absorbed into the bloodstream. Insulin helps to facilitate the uptake of glucose by cells, reducing blood sugar levels.
 {"\n"}
 {"\n"}Types of Diabetes
 {"\n"}
 {"\n"}There are several types of diabetes, each with distinct causes and characteristics.





    {"\n"}Complications of Diabetes

Untreated or poorly managed diabetes can lead to a range of complications, including:{"\n"}

-  Cardiovascular disease:  High blood sugar levels can damage blood vessels and increase the risk of heart disease, heart attack, and stroke.
-  Nerve damage:  High blood sugar levels can damage nerves, causing numbness, tingling, and pain in the hands and feet.
-  Kidney damage:  High blood sugar levels can damage the kidneys and increase the risk of kidney failure.
-  Vision problems:  High blood sugar levels can damage the blood vessels in the eyes and increase the risk of blindness.

{"\n"} Management and Prevention 

While there is no cure for diabetes, it can be managed with lifestyle changes, medications, and insulin therapy. Preventing complications requires:

-  Regular monitoring:  Monitoring blood sugar levels regularly to ensure they are within a healthy range.
-  Healthy lifestyle:  Maintaining a healthy diet, engaging in regular physical activity, and managing weight.
-  Medications:  Taking medications as prescribed by a healthcare provider.
-  Regular check-ups:  Regular check-ups with a healthcare provider to monitor progress and adjust treatment plans as needed.

By understanding diabetes and its management, individuals can take control of their condition and reduce the risk of complications.
        </Text>
        <Text style={styles.paragraph}>
 
        {"\n"}Type 1 Diabetes
Type 1 diabetes is an autoimmune disease in which the body's immune system attacks and 
destroys the cells in the pancreas that produce insulin. As a result, the body is unable to produce enough insulin, and blood sugar levels become elevated.
{"\n"}
{"\n"}Causes
{"\n"}The exact cause of type 1 diabetes is unknown, but it is believed to involve
 a combination of genetic and environmental factors.
{"\n"}Symptoms: Symptoms of type 1 diabetes can develop rapidly and may include:
    - Increased thirst and urination
    - Fatigue
    - Blurred vision
    - Cuts or wounds that are slow to heal
    - Tingling or numbness in the hands and feet
    {"\n"}Treatment:
{"\n"} Type 1 diabetes is typically managed with insulin therapy, which involves injecting insulin into the body to regulate blood sugar levels.
</Text>
<Text style={styles.paragraph}>



{"\n"}Type 2 Diabetes
Type 2 diabetes is a metabolic disorder characterized by insulin resistance, where the body's cells become 
less responsive to insulin. Over time, the pancreas may also become unable to produce enough insulin to meet
 the body's needs.

{"\n"}Causes: The causes of type 2 diabetes are complex and multifactorial, but risk factors include:
    - Obesity
    - Physical inactivity
    - Family history
    - Age (risk increases after 45)
    - Certain ethnicities
    {"\n"}Symptoms
    {"\n"}Symptoms of type 2 diabetes can develop gradually and may include:
    - Increased thirst and urination
    - Fatigue
    - Blurred vision
    - Slow healing of cuts and wounds
    - Tingling or numbness in the hands and feet
    {"\n"}Treatment 
    {"\n"}Type 2 diabetes is typically managed with lifestyle changes, such as:
    - Healthy eating
    - Regular physical activity
    - Weight loss (if overweight or obese)
    - Medications, such as metformin or sulfonylureas, may also be prescribed to help regulate blood 
    sugar levels.

    </Text>
<Text style={styles.paragraph}>
{"\n"} Gestational Diabetes
Gestational diabetes is a type of diabetes that develops during pregnancy, usually in the second or third 
trimester. It is caused by hormonal changes and insulin resistance associated with pregnancy.

{"\n"}Causes
{"\n"} The exact cause of gestational diabetes is unknown, but risk factors include:
    - Age (risk increases after 35)
    - Family history
    - Obesity
    - Previous history of gestational diabetes
    {"\n"}Symptoms
{"\n"} Gestational diabetes often does not have noticeable symptoms, but it can increase the risk of 
complications during pregnancy and delivery.
{"\n"}Treatment Gestational diabetes is typically managed with lifestyle changes, such as:
    - Healthy eating
    - Regular physical activity
    - Monitoring blood sugar levels
    - In some cases, insulin therapy may be necessary.


</Text>

        <Text style={styles.paragraph}>
          NutriPro aims to simplify and enhance the way diabetic individuals interact with their health, helping them live fuller, healthier lives. It’s not just an app — it’s a movement towards  *digital health empowerment**. 💙
        </Text>


        <Text style={styles.footer}>Together, let’s End Diabetes.</Text>
        <TouchableOpacity style={styles.button}>
  <Text style={styles.buttonText} onPress={() => navigation.navigate('Tips')}>More Articles About Diabetes</Text>
</TouchableOpacity>
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
  buttonText: { color: 'white', fontSize: 16, textAlign: 'center' },
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

  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
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

export default ArticlesScreen;
