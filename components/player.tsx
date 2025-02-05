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
        style={styles.icon}
      />
      <View style={styles.metadataContainer}>
        {data?.artist || data?.album ? (
          <>
            <Text style={styles.metadataTextTitle} numberOfLines={2}>
              {data?.title || currentSource?.stationName}
            </Text>
            <Text
              style={[
                styles.metadataTextArtistAlbum,
                { display: data?.artist ? "flex" : "none" },
              ]}
              numberOfLines={2}
            >
              {data?.artist ? `${data?.artist} - ${data?.album}` : ""}
            </Text>
          </>
        ) : (
          <Text style={[styles.metadataTextTitle, styles.centeredText]}>
            {currentSource?.stationName}
          </Text>
        )}
      </View>
      <Image
        source={{ uri: currentSource?.albumArt }}
        style={styles.metadataImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    flex: 1,
    marginHorizontal: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 16,
    flexShrink: 0,
  },
  metadataContainer: {
    flex: 1,
    maxWidth: "70%",
    paddingHorizontal: 8,
    flexWrap: "wrap",
    justifyContent: "center", // Add this to center content vertically
    alignItems: "center", // Add this to center content horizontally
  },
  metadataTextTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
    flexWrap: "wrap",
    width: "100%",
  },
  centeredText: {
    textAlign: "center",
  },
  metadataTextArtistAlbum: {
    fontSize: 12,
    flexWrap: "wrap",
    width: "100%",
  },
  metadataImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
    resizeMode: "contain",
    marginLeft: 16,
    flexShrink: 0,
  },
});
