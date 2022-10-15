import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { UserCardProps } from "../utilities/types";

export default function UserCard({ user, selectUser }: UserCardProps) {
  let image = { uri: `${user?.image}` };
  return (
    <Pressable
      onPress={() => {
        selectUser(user);
      }}
      style={[styles.userCard, styles.elevation, styles.shadowProp]}
    >
      <ImageBackground source={image} style={styles.userImage} resizeMode="cover" />
      <View>
        <View style={styles.textWrapper}>
          <View style={styles.textView}>
            <Text style={styles.text}>{user?.firstName}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>{user?.age}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: "orange",
    width: "45%",
    height: 200,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
    margin: "2.5%",
  },
  userImage: {
    flex: 1,
    justifyContent: "center",
  },
  textWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    backgroundColor: "rgba(0,0,0,0)",
    zIndex: 1,
  },
  textView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 4,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 10,
  },
  elevation: {
    shadowColor: "#52006A",
    shadowRadius: 3,
    elevation: 15,
  },
  shadowProp: {
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "#52006A",
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
});
