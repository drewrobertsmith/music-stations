import { LOCAL_STATION_DATA } from "@/local-station-data";
import { Station } from "@/types/interfaces";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Sortable, { SortableGridRenderItem } from "react-native-sortables";

export default function Page() {
  const renderItem: SortableGridRenderItem<Station> = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.callLettersText}>{item.callLetters}</Text>
        <Text style={styles.localStationItem}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Sortable.Grid
          columns={1}
          data={LOCAL_STATION_DATA}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          rowGap={8}
          snapOffsetX={"0%"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 8,
  },
  callLettersText: {
    fontSize: 24,
  },
  localStationItem: {
    fontSize: 16,
  },
});
