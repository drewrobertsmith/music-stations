import LocalStationItem from "@/components/location-station-item";
import Player from "@/components/player";
import StationItem from "@/components/station-item";
import { LOCAL_STATION_DATA } from "@/local-station-data";
import { STATION_DATA } from "@/station-data";
import { Station } from "@/types/interfaces";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [stationAccentColor, setStationAccentColor] = useState("#e5e5e5");
  const [defaultLocalStation, setDefaultLocalStation] = useState<Station>(
    LOCAL_STATION_DATA[9],
  );

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView
        style={[styles.container, { backgroundColor: stationAccentColor }]}
      >
        <FlatList
          ListHeaderComponent={
            <View style={styles.localStationContainer}>
              <LocalStationItem
                defaultLocalStation={defaultLocalStation}
                setDefaultLocalStation={setDefaultLocalStation}
                setStationAccentColor={setStationAccentColor}
              />
              <Link href="/local-stations">
                <FontAwesome5 name="location-arrow" size={24} />
              </Link>
            </View>
          }
          contentContainerStyle={styles.listContainer}
          data={STATION_DATA}
          keyExtractor={(item) => item.tritonId}
          renderItem={({ item }) => (
            <StationItem
              item={item}
              setStationAccentColor={setStationAccentColor}
            />
          )}
        />
        <Player />
      </SafeAreaView>
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
  listContainer: {},
  localStationContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 16,
  },
});
