import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import React, {useState} from "react"
import Modal from './components/Modal'
import MyReactNativeComponent from './components/MyReactNativeComponent'
import { Ionicons } from '@expo/vector-icons' 
import styled from 'styled-components/native'
import List from './components/List';
import MyInput from './components/MyInput';

const ActionButton = styled.TouchableOpacity`
  background-color: #F2E257;
  padding: 5px 15px;
  border-radius: 50px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 5px #7858f2;
`

const StyledText = styled.Text`
  color: #7858F2;
  text-align: center;
  font-weight: bold;
`

export default function App() {
  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)


  const onHandleChangeItem = text => setTextValue(text)

  const addFriend = () => {
    if (textValue === '') {
      return
    }

    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ])
    setTextValue('')
  }

  const renderListItem = ({ item, index }) => (
    
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text style={styles.textItem}>{item?.value}</Text>
      <Ionicons name="md-trash-bin-outline" size={24} color="#F2E257" />
    </TouchableOpacity>
    
  )

  const onHandleDelete = () => {
    console.log(itemSelected)
    let arr = itemsList
    arr.splice(itemSelected, 1)
    setItemsList(arr)
    setModalVisible(false)
  }

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  }

  const onHandleCancel = index => {
    setModalVisible(false)
    setItemSelected(index)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO THE FRIENDS BUILDER APP!</Text>
      <Text style={styles.textContainer}>APP to remember calling friends or clients depending on the category every N amount of time !</Text>
      <Text style={styles.subTitle}>Add your Friends</Text>
      <View style={styles.inputContainer}>

        <MyInput textValue={textValue} onHandleChangeItem={onHandleChangeItem}  />
        <ActionButton color={'#442BA6'} onPress={addFriend} >

        <StyledText>ADD</StyledText>
        
        <Ionicons name="ios-person-circle-outline" size={40} color="#A6971B" />
        </ActionButton>
      </View>
      <View style={styles.listContainer}>
        <List itemsList={itemsList} renderListItem={renderListItem}  />
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} onHandleCancel={onHandleCancel} />

      <StatusBar style="auto" />
      <MyReactNativeComponent  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#fff',
  },
  title: {
    color: '#8C44DB',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  textContainer: {
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#7858F2',
    color: '#fff',
    borderColor: '#442BA6',
    borderRadius: 10,
    borderWidth: 3,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#9175FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
  },
  subTitle: {
    color: '#8C44DB',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',

  },
  listContainer: {
    flex: 1,
    marginTop: 5,
  },
  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    paddingRight: 15,
    backgroundColor: '#9175FF',
    shadowColor: '#444FDB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  textItem: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#fff',
    fontWeight: '600',
  },
})

