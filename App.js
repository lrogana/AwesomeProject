import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalITem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  const [courseGoals, setCourseGoals] = useState([]);



  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
     ]);
     endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal)=> goal.id !== id);

    });

  }
  return (
    <>
    <StatusBar style='dark'></StatusBar>
    <View style={styles.appContainer}>
      <Button title='Add new goal'
       color={'black'} 
       onPress={startAddGoalHandler}
       ></Button>

      {modalIsVisible && <GoalInput visible={modalIsVisible}onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
      <FlatList  
      data={courseGoals}
       renderItem={(itemData) => {
        return <GoalItem 
        text={itemData.item.text} 
        id={itemData.item.id}
        onDeleteItem={deleteGoalHandler}/>
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }
      
      }
      
      >
        
        
        

      </FlatList>
      </View>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#06C167'
  },
  
  goalsContainer: {
    flex: 4
  }
  
});
