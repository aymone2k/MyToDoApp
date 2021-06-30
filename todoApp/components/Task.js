import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View , TextInput, Button, ScrollView} from 'react-native';
import axios from 'axios';

//réccup une tache du back  et permet de les modifier(remove/done)
export default function Task({task, title, id, done }) {
    const[taskRemove, setTaskRemove] = useState()
    const[taskDone, setTaskDone]= useState(true)
    const [item, setItem] = useState()

    const handleRemove =(id) =>{
        console.log(id);
        axios.delete('http://localhost:3000/api/tasks/'+ id, {id:id})
        .then(function(reponse){
            setTaskRemove(reponse.data);
            //efface mais faire useeffect pour actualiser 
        })
      }
    
    const handleDone=(id)=>{
       
        axios.patch('http://localhost:3000/api/tasks/'+ id, {done:'true'})
        .then(function(reponse){
            setTaskDone(done);
           
        })
        console.log(taskDone)
        if(taskDone === true){
           // chercher comment barrer la tache effectuée 
        }
    }


  return (

     <View   style={styles.task}>
<Text >{title}</Text>
<View   style={styles.taskBtn}>
<Button  title="Effacer" color='red' onPress={()=>{handleRemove(id)}}/>
<Button title="Terminé !" color="green" onPress={()=>{handleDone(id)}}/>

</View>

</View>
    
  );
}

const styles = StyleSheet.create({
  task: {
  margin: '15px',
   flexDirection: 'row',
   
    //backgroundColor: 'red',
  alignItems: 'center',
  justifyContent: 'space-between',
  },

  taskBtn: {
    margin: '15px',
    
       alignItems: 'space-between',
   justifyContent: 'space-between',
   },
 

 
});
