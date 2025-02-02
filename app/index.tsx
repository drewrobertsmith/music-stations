import { useAudio } from "@/contexts/audio-context";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { player, play, pause, status } = useAudio();

  return (
    <View style={styles.container}>
      <Button title="Play" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
