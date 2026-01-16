import {SafeAreaView} from "react-native-safe-area-context";
import TabsTopNav from "@/components/layout/tabs-top-nav";
import {HomePage} from "@/components/feature/home-page";

export default function HomeScreen() {
  return (
    <SafeAreaView
      edges={['top', 'right', 'left']}
      style={{ flex: 1, paddingHorizontal: 16 }}
    >
      <TabsTopNav id={"home-screen"}/>
      <HomePage/>
    </SafeAreaView>
  );
}
