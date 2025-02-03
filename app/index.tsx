import Player from "@/components/player";
import StationItem from "@/components/station-item";
import { STATION_DATA } from "@/station-data";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const [stationAccentColor, setStationAccentColor] = useState("#e5e5e5");

  return (
    <View style={[styles.container, { backgroundColor: stationAccentColor }]}>
      <FlatList
        data={STATION_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StationItem
            item={item}
            setStationAccentColor={setStationAccentColor}
          />
        )}
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
