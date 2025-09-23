import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View,Button,ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredTextGoal, setEnteredTextGoal] = useState({});
  const [courseGoals,setCourseGoals]= useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredTextGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, {text:enteredTextGoal,id : Math.random().toString()}]);
    // setEnteredTextGoal('');
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
      <TextInput placeholder='Enter your goal' style={styles.textInput} onChangeText={goalInputHandler} />
      <Button title='Add Goal'  onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      <View>  
        {/* <ScrollView>
        {courseGoals.map((goal,index) =>(
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
        </ScrollView> */}
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return (
          <GoalItem />
          )
        }} keyExtractor={(item,index)=> item.id }/>

        </View>
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