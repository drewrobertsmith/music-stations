import { getTritonMetadata } from "@/api/metadata-request";
import { useAudio } from "@/contexts/audio-context";
import { STATION_DATA } from "@/station-data";
import { FontAwesome5 } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Player() {
  const { pause, player, status, currentSource } = useAudio();
  const { data, isLoading, error } = useQuery(
    getTritonMetadata(currentSource?.tritonId),
  );

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
      {status?.isBuffering || isLoading || !currentSource ? (
        <Text>{}</Text>
      ) : (
        <View>
          <Text style={styles.metadataText} numberOfLines={1}>
            {data?.title}
          </Text>
          <Text style={styles.metadataText} numberOfLines={1}>
            {`${data?.artist} - ${data?.album}`}
          </Text>
        </View>
      )}
      <Image
        source={{ uri: currentSource?.albumArt }}
        height={40}
        width={40}
        borderRadius={4}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    padding: 24,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metadataText: {
    fontSize: 14,
    paddingHorizontal: 8,
  },
});
