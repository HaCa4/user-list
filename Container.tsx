import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { UserDetailModal, NewUserModal, UserCardList } from "./components";
import { actionCreators } from "./utilities/store/index";
import { InitialState } from "./utilities/types/typesForRedux";

export default function Container() {
  const dispatch = useDispatch();
  const { getUsers, openAddModal } = bindActionCreators(actionCreators, dispatch);

  const { isAddNewUserModalOpen, isUserDetailModalOpen, selectedUser } = useSelector(
    (state: InitialState) => state.reducer
  );
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isAddNewUserModalOpen && <NewUserModal />}
      {selectedUser && isUserDetailModalOpen && <UserDetailModal />}
      <UserCardList />
      <Pressable onPress={() => openAddModal()} style={styles.addButton}>
        <Text style={{ color: "white", fontWeight: "700" }}>Add New User</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  addButton: {
    width: "40%",
    height: 36,
    backgroundColor: "#52006A",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
