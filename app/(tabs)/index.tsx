import {SafeAreaView} from "react-native-safe-area-context";
import TabsTopNav from "@/components/layout/tabs-top-nav";
import {HomePage} from "@/components/feature/home-page";
import {MessageCircleMore} from "lucide-react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView
      edges={['top']}
      style={{ flex: 1}}
    >
      <TabsTopNav
        id={"home-screen"}
        rightContent={<MessageCircleMore size={24}/>}
      />
      <HomePage/>
    </SafeAreaView>
  );
}
