import { useState } from 'react';
import {StyleSheet,View,TextInput,Button} from 'react-native';
function GoalInput(props){
      const [enteredTextGoal, setEnteredTextGoal] = useState({});

      const goalInputHandler = (enteredText) => {
      setEnteredTextGoal(enteredText);
    };
    const addGoalHandler=()=>{
        props.addGoalHandler(enteredTextGoal)
        setEnteredTextGoal('');
    }
    return (
        <View style={styles.inputContainer}>
              <TextInput placeholder='Enter your goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredTextGoal} />
              <Button title='Add Goal'  onPress={addGoalHandler}/>
        </View>
    )
}

export default GoalInput;

const styles=StyleSheet.create({
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
})