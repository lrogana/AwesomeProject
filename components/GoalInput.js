import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput (props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }
    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')}></Image>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your Course Goal' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
    <Button color={'#000000'} 
        title='Add Goal' 
        onPress={addGoalHandler}
        >
    
        </Button>
        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.onCancel}></Button>
        </View>
    </View>
        
      </View>
      </Modal>
    )
};


export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        backgroundColor: '#06C167'
      },
      image:{
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#000000',
        width: '100%',
        margin: 8,
        padding: 8
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
      },

      button:{
        width: 100,
        marginHorizontal: 8
      }
});