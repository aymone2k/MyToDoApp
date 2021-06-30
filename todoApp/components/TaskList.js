import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View , TextInput, Button, ScrollView} from 'react-native';
import axios from 'axios';
import Task from './Task';

export default function TaskList() {
    //affiche simplement la liste des tacks
 
    const[task, setTask] = useState();
  
    useEffect(function(){
        axios.get('http://localhost:3000/api/tasks/')
        .then(function(reponse){
            setTask(reponse.data);
        })
    },[]);
    console.log("task",task);
    if(task === undefined){
        return( 
            <View>
                <Text>En chargement...</Text>
            </View> 
        )
    }
 
 
    return (
    <View style={styles.container}>
      <Text>liste des taches</Text>
      {task.map((task, index)=>{
          return(
<Task key={task._id} title={task.title} id={task._id} done={task.done} />

          )
      })}
    
    </View>
  );
}

const styles = StyleSheet.create({
  
  item:{
    textDecorationLine:'line-through',
  }
});
