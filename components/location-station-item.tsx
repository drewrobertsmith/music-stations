import { useAudio } from "@/contexts/audio-context";
import { Station } from "@/types/interfaces";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LocalStationdefaultLocalStation({
  defaultLocalStation,
  setStationAccentColor,
}: {
  defaultLocalStation: Station;
  setDefaultLocalStation: Dispatch<SetStateAction<Station>>;
  setStationAccentColor: Dispatch<SetStateAction<string>>;
}) {
  const { play, setCurrentSource } = useAudio();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setCurrentSource({
            trackId: defaultLocalStation.tritonId,
            tritonId: defaultLocalStation.tritonId,
            url: defaultLocalStation.stream,
            stationName: defaultLocalStation.name,
          });
          play({
            uri: defaultLocalStation?.stream,
          });
          // player.replace({ uri: defaultLocalStation.fallbackstream });
          // player.play();
          setStationAccentColor(defaultLocalStation.backgroundColor);
        }}
      >
        <Text style={styles.stationItem}>{defaultLocalStation?.name}</Text>
      </TouchableOpacity>
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
