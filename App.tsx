import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import UserCard from "./components/UserCard";
import axios from "axios";
import UserDetailModal from "./components/UserDetailModal";
import NewUserModal from "./components/NewUserModal";
import { SingleUser } from "./utilities/types";

export default function App() {
  const [userList, setUserList] = useState<SingleUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<SingleUser>(userList[0]);
  const [isUserSelected, setIsUserSelected] = useState<boolean>(false);
  const [addNewUserSelected, setAddNewUserSelected] = useState<boolean>(true);

  const onSelectUser = (user: SingleUser) => {
    setSelectedUser(user);
    setIsUserSelected(true);
  };

  const closeModal = () => {
    setIsUserSelected(false);
    setAddNewUserSelected(false);
  };

  const fetchUsers = async () => {
    await axios("https://dummyjson.com/users").then((res) => {
      setUserList(res.data.users);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  let numCols = 2;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {addNewUserSelected && (
        <NewUserModal userList={userList} setUserList={setUserList} closeModal={closeModal} />
      )}
      {selectedUser && isUserSelected && (
        <UserDetailModal closeModal={closeModal} user={selectedUser} />
      )}

      <View style={styles.flatListContainer}>
        {userList.length > 0 ? (
          <FlatList
            numColumns={numCols}
            style={styles.flatList}
            data={userList}
            renderItem={(item) => {
              console.log(item);
              return <UserCard selectUser={onSelectUser} key={Math.random()} user={item.item} />;
            }}
          />
        ) : (
          <Text>Users are Loading</Text>
        )}
      </View>
      <Pressable onPress={() => setAddNewUserSelected(true)} style={styles.addButton}>
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
  flatListContainer: {
    width: "100%",
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#52006A",
    borderBottomWidth: 5,
  },
  flatList: {
    width: "100%",
    marginHorizontal: "auto",
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
