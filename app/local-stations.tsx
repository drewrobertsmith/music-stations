import { LOCAL_STATION_DATA } from "@/local-station-data";
import { FlatList, Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      <FlatList
        data={LOCAL_STATION_DATA}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
