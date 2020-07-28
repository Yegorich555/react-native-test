import React, { useState } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import imgOval from '@images/oval.png';
import { useDispatch } from 'react-redux';
import ActionTypes from '@/redux/actionTypes';

function ModalList({ onClose }) {
  //todo custom hook with TS
  const dispatch = useDispatch();

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.modalView}>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            dispatch({ type: ActionTypes.Logout });
            onClose();
          }}>
          <Text style={styles.textStyle}>Logout</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    right: 0,
    marginTop: 50,
    alignItems: 'flex-end',
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'flex-end',
  },
  openButton: {
    padding: 10,
    paddingVertical: 5,
    backgroundColor: '#2196F3',
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function HeaderRight(props: { tintColor?: string }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        {...props}
        style={{ paddingRight: 15 }}
        onPress={() => {
          setOpen(true);
        }}>
        <Image source={imgOval} />
      </TouchableOpacity>
      {isOpen ? <ModalList onClose={() => setOpen(false)} /> : null}
    </>
  );
}
