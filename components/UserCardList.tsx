import { FlatList, View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../utilities/store";
import { InitialState } from "../utilities/types/typesForRedux";
import UserCard from "./UserCard";

function UserCardList() {
  const dispatch = useDispatch();

  const { getUsers } = bindActionCreators(actionCreators, dispatch);
  const { userList } = useSelector((state: InitialState) => state.reducer);

  let numCols = 2;

  return (
    <View style={styles.flatListContainer}>
      {userList?.length ? (
        <FlatList
          numColumns={numCols}
          style={styles.flatList}
          data={userList}
          renderItem={(item) => {
            return <UserCard key={Math.random()} user={item.item} />;
          }}
        />
      ) : (
        <View style={styles.loadingInfo}>
          <Text style={{ color: "white", fontWeight: "700" }}>Users are loading</Text>
        </View>
      )}
    </View>
  );
}
export default UserCardList;

const styles = StyleSheet.create({
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
  loadingInfo: {
    width: "80%",
    height: 36,
    backgroundColor: "orange",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
