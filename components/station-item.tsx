import { useAudio } from "@/contexts/audio-context";
import { Station } from "@/station-data";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StationItem({
  item,
  setStationAccentColor,
}: {
  item: Station;
  setStationAccentColor: string;
}) {
  const { play } = useAudio();
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          play({ uri: item.fallbackstream });
          setStationAccentColor(item.bannerColor);
        }}
      >
        <Text style={styles.stationTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
  },
  stationTitle: {
    fontSize: 44,
    fontWeight: "bold",
  },
});
