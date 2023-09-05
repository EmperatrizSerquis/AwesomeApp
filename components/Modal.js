import { Button, Modal as NewModal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import React from 'react'

const Modal = ({ modalVisible, onHandleDelete, onHandleCancel }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.modalTitle}>DELETE FRIEND?</Text>
          </View>
          <View>
            <Text style={styles.modalMessage}>Are you sure?</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title="Confirm" color={'#F2E257'} onPress={onHandleDelete} />
          </View>
          <TouchableOpacity
             style={styles.cancelButton}
             onPress={onHandleCancel}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#F2E257',
    width: '80%',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#9175FF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    color: '#442BA6',
    fontSize: 22,
    marginBottom: 15
  },
  modalMessage: {
    marginBottom: 15,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    color: '#F2E257',
    backgroundColor: '#442BA6',
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    color: '#442BA6',
    borderColor: '#442BA6',
    borderWidth: 1,
    marginTop:30,
  },
  cancelText: {
    color: '#000',
  }
})
