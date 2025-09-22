import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredTextGoal, setEnteredTextGoal] = useState('');
  const [courseGoals,setCourseGoals]= useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredTextGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredTextGoal]);
    setEnteredTextGoal('');
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
      <TextInput placeholder='Enter your goal' style={styles.textInput} />
      <Button title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
      <Text>{courseGoals.map((goal,index) => <Text key={index}>{goal}</Text>)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
  },
  inputContainer: {
    flex:1, 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',

  },
  textInput: {
    borderWidth:1,
    borderColor:'#cccccc',
    width:'80%',
    marginRight:8,
    padding:8,
  },
  goalsContainer: {
    flex:5,
  }
});
