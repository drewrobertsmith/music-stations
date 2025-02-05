import { useAudio } from "@/contexts/audio-context";
import { Station } from "@/station-data";
import React, { SetStateAction, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StationItem({
  item,
  setStationAccentColor,
}: {
  item: Station;
  setStationAccentColor: React.Dispatch<SetStateAction<string>>;
}) {
  const { play, currentSource, setCurrentSource, player } = useAudio();
  const [selectedStation, setSelectedStation] = useState("#000000");

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          setCurrentSource({
            trackId: item.id,
            tritonId: item.tritonId,
            url: item.fallbackstream,
            albumArt: item.applogoM,
            stationName: item.title,
          });
          // play({
          //   uri: item.fallbackstream,
          // });
          player.replace({ uri: item.fallbackstream });
          player.play();
          setStationAccentColor(item.bannerColor);
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
          {item.title}
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
    fontSize: 44,
    fontWeight: "bold",
  },
});
