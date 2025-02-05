import Player from "@/components/player";
import StationItem from "@/components/station-item";
import { STATION_DATA } from "@/station-data";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const [stationAccentColor, setStationAccentColor] = useState("#e5e5e5");

  return (
    <>
      <StatusBar style="auto" />
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingBottom: 8,
    justifyContent: "space-between",
  },
});
