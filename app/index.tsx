import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className={"items-center"}>
        <Text className={"text-red-600"}>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </SafeAreaView>
  );
}
