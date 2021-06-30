import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button, ScrollView} from 'react-native';
import axios from 'axios';


export default function AddTask() {
    //input pour saisir les taches et les enregistrer dans le back avec un done false
    const[inputTask, setInputTask] = useState();  

    const handleAdd=()=>{
        setInputTask(' ');
        console.log(inputTask)
        axios.post("http://localhost:3000/api/tasks/", {title: inputTask, done:false}).then(function(res){console.log(res)})
    }

  return (
   
      <View style={styles.add}>
         
        <TextInput style={styles.txtAdd} placeholder="saisir taches" value={inputTask} onChangeText={text => setInputTask(text)}/>    
        <Button color='pink' title="enregistrer" onPress={handleAdd}/>
     
      </View> 
  
  );
}

const styles = StyleSheet.create({

    add: {
        flexDirection:'row',
          margin:15,
    },
  txtAdd: {
    borderColor:'pink',
    height:40,
    borderWidth:4,
    marginRight:15,
    backgroundColor:'white',
  },
});
