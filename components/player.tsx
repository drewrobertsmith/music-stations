import { useAudio } from "@/contexts/audio-context";
import { STATION_DATA } from "@/station-data";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Player() {
  const { pause, player, status } = useAudio();

  const handlePlayPausePress = () => {
    if (player.playing) {
      pause();
    } else {
      player.play();
    }
  };
  return (
    <View style={styles.playerContainer}>
      <FontAwesome5
        name={status?.playing ? "pause" : "play"}
        size={50}
        color="black"
        onPress={handlePlayPausePress}
      />
      <Text>Select a stream to see metadata</Text>
      <Image
        source={{ uri: STATION_DATA[0].applogoM }}
        height={40}
        width={40}
        borderRadius={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    padding: 32,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
