import { View, StyleSheet } from "react-native";
import Auth from "../../components/Auth"; // Import the reusable component

export default function MyListScreen() {
  return (
    <View style={styles.container}>
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
});
