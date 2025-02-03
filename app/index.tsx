import { useAudio } from "@/contexts/audio-context";
import { Station, STATION_DATA } from "@/station-data";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { player, play, pause, status } = useAudio();

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

const StationItem = ({ item }: { item: Station }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.stationTitle}>{item.title}</Text>
    </View>
  );
};

const Player = () => {
  return (
    <View style={styles.playerContainer}>
      <FontAwesome5 name="play" size={50} color="black" />
      <Text>Select a stream to see metadata</Text>
      <Image
        source={{ uri: STATION_DATA[0].applogoM }}
        height={40}
        width={40}
        borderRadius={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flex: 1,
  },
  itemContainer: {
    paddingVertical: 16,
  },
  playerContainer: {
    padding: 32,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stationTitle: {
    fontSize: 44,
    fontWeight: "bold",
  },
});
