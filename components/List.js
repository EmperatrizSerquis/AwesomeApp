import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native';

const List = ({ itemsList, renderListItem }) => {
    return (
      <View style={styles.listContainer}>
        <FlatList 
        data={itemsList}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
      />
      </View>
    )
  }
  
  export default List

  const styles = StyleSheet.create({

    listContainer: {
      flex: 1,
      marginTop: 25,
    },
    itemContainer: {
      flex: 1,
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
})