import React from "react";
import { View, Modal, Image, Text, StyleSheet, Pressable } from "react-native";
import { UserDetailModalProps } from "../utilities/types";

const UserDetailModal = ({ user, closeModal }: UserDetailModalProps) => {
  let image = { uri: `${user?.image}` };
  return (
    <Modal style={styles.modal}>
      <View style={styles.modalView}>
        <View style={[styles.info, styles.shadowProp, styles.shadowProp]}>
          <Image source={image} style={styles.image} />
          <View>
            <Text>
              First Name:
              <Text style={styles.text}>{user?.firstName}</Text>
            </Text>
            <Text>
              Last Name:
              <Text style={styles.text}>{user?.lastName}</Text>
            </Text>
            <Text>
              Age:
              <Text style={styles.text}>{user?.age}</Text>
            </Text>
            <Text>
              Address:
              <Text style={styles.text}>{user?.address?.address} </Text>
            </Text>
            <Text>
              Postal Code:
              <Text style={styles.text}>{user?.address?.postalCode}</Text>
            </Text>
            <Text>
              State:
              <Text style={styles.text}>{user?.address?.state}</Text>
            </Text>
          </View>
          <Pressable onPress={closeModal} style={styles.close}>
            <Text style={{ color: "white", fontWeight: "700" }}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default UserDetailModal;
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
  image: { width: 100, height: 150 },
  info: {
    backgroundColor: "orange",
    height: "50%",
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 16,
  },
  text: {
    fontWeight: "700",
  },
  close: {
    width: 100,
    height: 30,
    backgroundColor: "#52006A",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  elevation: {
    shadowColor: "#52006A",
    elevation: 20,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
