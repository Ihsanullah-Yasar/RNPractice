import { useState } from 'react';
import {StyleSheet,View,TextInput,Button, Modal, Image} from 'react-native';
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
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal1.png')} style={styles.image} />
                <TextInput placeholder='Enter your goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredTextGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel'  onPress={props.onCancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal'  onPress={addGoalHandler} color="#8e62c9ff" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles=StyleSheet.create({
    inputContainer: {
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth:1,
    borderColor:'#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width:'100%',
    padding:16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
})