import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

  const MyInput = ({ textValue, onHandleChangeItem  }) => {
    
    return (
        <TextInput style={styles.input} placeholder="New FRIEND" type="text" 
        value={textValue}
        onChangeText={onHandleChangeItem} />
      
    );
  }

  export default MyInput

  const styles = StyleSheet.create({
   
    input: {
      width: 250,
      height: 50,
      fontSize: 17,
      paddingLeft: 10,
      borderColor: '#442BA6',
      shadowColor: '#444FDB',
      borderWidth: 2,
  
    },
  })