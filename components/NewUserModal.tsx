import React, { useState } from "react";
import { View, Modal, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { SingleUser } from "../utilities/types";

interface NewUserModalProps {
  closeModal: () => void;
  setUserList: React.Dispatch<React.SetStateAction<SingleUser[]>>;
  userList: SingleUser[];
}

const NewUserModal = ({ closeModal, setUserList, userList }: NewUserModalProps) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | string>(0);
  const [url, setUrl] = useState<string>("");

  const handleAddUser = async () => {
    await setUserList([
      ...userList,
      {
        firstName: name,
        age: age,
        image: url,
      },
    ]);
    closeModal();
  };
  return (
    <Modal style={styles.modal}>
      <View style={styles.modalView}>
        <View style={[styles.info, styles.shadowProp, styles.elevation]}>
          <Text style={{ color: "black", fontWeight: "700", fontSize: 20, marginBottom: 8 }}>
            Add New User
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={name}
              onChangeText={setName}
              textContentType="name"
              style={styles.input}
              placeholder="Name"
            />
            <TextInput
              onChangeText={setAge}
              keyboardType="numeric"
              style={styles.input}
              placeholder="Age"
            />
            <TextInput
              value={url}
              onChangeText={setUrl}
              textContentType="URL"
              keyboardType="url"
              style={styles.input}
              placeholder="Photo URL"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={handleAddUser} style={styles.add}>
              <Text style={{ color: "white", fontWeight: "700" }}>Add</Text>
            </Pressable>
            <Pressable onPress={closeModal} style={styles.close}>
              <Text style={{ color: "white", fontWeight: "700" }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewUserModal;
const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    backgroundColor: "orange",
    height: "40%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  inputContainer: {
    width: "100%",
    height: "55%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    height: 36,
    borderRadius: 6,
    paddingLeft: 12,
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  close: {
    width: 100,
    height: 30,
    backgroundColor: "rgba(0,0,0,0.75)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    width: 100,
    height: 30,
    backgroundColor: "rgba(145,0,0,0.7)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  elevation: {
    shadowColor: "#52006A",
    elevation: 24,
  },
  shadowProp: {
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "#52006A",
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
});
