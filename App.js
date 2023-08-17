import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>WELCOME!</Text>
      
      <Text style={styles.title}>FRIENDS BUILDER APP!</Text>
      <Text>APP to remember calling friends or clients depending on the category every x amount of time !</Text>
      <Text>NOT DECIDED YET!</Text>
      <Text style={styles.title}>FIND PROPERTIES APP!</Text>
      <Text>APP to find selling properties!</Text>
      <Text style={styles.title}>Personalized quotes for services or Chatbot!</Text>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    color: '#7858F2',
    fontSize: '30px',
    fontWeight: 'bold'
  }
});
