import { LOCAL_STATION_DATA } from "@/local-station-data";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SortableGridRenderItem } from "react-native-sortables";

export default function Page() {
  const renderItem: SortableGridRenderItem<string> = ({ item }) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
