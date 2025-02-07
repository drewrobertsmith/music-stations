import { useAudio } from "@/contexts/audio-context";
import { Station } from "@/types/interfaces";
import React, { SetStateAction, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StationItem({
  item,
  setStationAccentColor,
}: {
  item: Station;
  setStationAccentColor: React.Dispatch<SetStateAction<string>>;
}) {
  const { play, currentSource, setCurrentSource } = useAudio();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          setCurrentSource({
            trackId: item.tritonId,
            tritonId: item.tritonId,
            url: item.stream,
            albumArt: item.applogoM,
            stationName: item.name,
          });
          play({
            uri: item.fallbackstream,
          });
          // player.replace({ uri: item.fallbackstream });
          // player.play();
          setStationAccentColor(item.backgroundColor);
        }}
      >
        <Text
          style={[
            styles.stationTitle,
            {
              color:
                currentSource?.tritonId === item.tritonId
                  ? "#ffffff"
                  : "#0000000",
            },
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingVertical: 12,
  },
  stationTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
