import {SafeAreaView} from "react-native-safe-area-context";
import TabsTopNav from "@/components/layout/tabs-top-nav";
import {ScrollView, View, Text} from "react-native";

export default function MyNetworkScreen() {
  return (
    <SafeAreaView edges={['top', 'right', 'left']} style={{ flex: 1 }}>
      <TabsTopNav id={"my-network-screen"}/>
      <ScrollView>
        <View>
          <Text>Feature coming soon</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
