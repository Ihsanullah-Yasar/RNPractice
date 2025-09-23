import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View,Button,ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals,setCourseGoals]= useState([]);

  const addGoalHandler = (enteredTextGoal) => {
    setCourseGoals((currentGoals) => [...currentGoals, {text:enteredTextGoal,id : Math.random().toString()}]);
  };

  const deleteGoalHandler=(id) =>{
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal)=> goal.id !==id)
    })
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
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
            <GoalItem GoalItem={itemData.item} onDeleteItem={deleteGoalHandler} />
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
  goalsContainer: {
    flex:5,
  }
});