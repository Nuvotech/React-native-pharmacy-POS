import { Slot, Stack } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, marginTop: 25 }}>
      <Slot />
    </View>
  );
}
