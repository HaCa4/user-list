import { View, Modal, Image, Text, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../utilities/store";
import { InitialState } from "../utilities/types/typesForRedux";

const UserDetailModal = () => {
  const dispatch = useDispatch();

  const { selectedUser } = useSelector((state: InitialState) => state.reducer);
  const { closeModals } = bindActionCreators(actionCreators, dispatch);
  let image = { uri: `${selectedUser?.image}` };

  return (
    <Modal style={styles.modal}>
      <View style={styles.modalView}>
        <View style={[styles.info, styles.shadowProp, styles.shadowProp]}>
          <Image source={image} style={styles.image} />
          <View>
            <Text>
              First Name:
              <Text style={styles.text}>{selectedUser?.firstName}</Text>
            </Text>
            <Text>
              Last Name:
              <Text style={styles.text}>{selectedUser?.lastName}</Text>
            </Text>
            <Text>
              Age:
              <Text style={styles.text}>{selectedUser?.age}</Text>
            </Text>
            <Text>
              Address:
              <Text style={styles.text}>{selectedUser?.address?.address} </Text>
            </Text>
            <Text>
              Postal Code:
              <Text style={styles.text}>{selectedUser?.address?.postalCode}</Text>
            </Text>
            <Text>
              State:
              <Text style={styles.text}>{selectedUser?.address?.state}</Text>
            </Text>
          </View>
          <Pressable onPress={closeModals} style={styles.close}>
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
