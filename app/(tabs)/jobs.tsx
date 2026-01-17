import {SafeAreaView} from "react-native-safe-area-context";
import TabsTopNav from "@/components/layout/tabs-top-nav";
import {ScrollView, View, Text} from "react-native";

export default function JobsScreen() {
  return (
    <SafeAreaView
      edges={['top']}
      style={{ flex: 1 }}
    >
      <TabsTopNav id="jobs-screen" />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
        <View>
          <Text>Feature coming soon</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

