import Player from "@/components/player";
import StationItem from "@/components/station-item";
import { STATION_DATA } from "@/station-data";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={STATION_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StationItem item={item} />}
      />
      <Player />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flex: 1,
  },
});
