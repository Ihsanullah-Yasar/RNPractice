import { StyleSheet, View,Text, Pressable } from "react-native";
function GoalItem(props){
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#3e0e7cff'}}
            onPress={props.onDeleteItem.bind(this, props.GoalItem.id)}
            style={({pressed})=> pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.GoalItem.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles= StyleSheet.create({
    goalItem: {
    margin:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: 'white',
    padding:8,
  }
})