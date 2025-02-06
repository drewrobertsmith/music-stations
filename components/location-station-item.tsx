import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function LocalStationItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.stationItem}>WMBI - Chicago</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stationItem: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
