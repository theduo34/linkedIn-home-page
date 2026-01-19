import {Tabs} from "expo-router";
import {Bell, Briefcase, House, SquarePlus, Users,} from 'lucide-react-native';

const TABS = [
  { name: "index", title: "Home", icon: House },
  { name: "my-network", title: "My Network", icon: Users },
  { name: "post", title: "Post", icon: SquarePlus },
  { name: "notifications", title: "Notifications", icon: Bell },
  { name: "jobs", title: "Jobs", icon: Briefcase },
] as const;


export default function TabsLayout() {
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        animation: 'shift',
        tabBarLabelStyle: { marginTop: 2 },
      }}
    >
      {TABS.map((tab, index) => {
        const IconComponent = tab.icon;
        return(
          <Tabs.Screen
            key={tab.title}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ color }) =>
                <IconComponent
                  color={color}
                  style={{marginTop: -2}}
                  strokeWidth={2.5}
                  size={28}
                />
            }}
          />
        )}
      )}
    </Tabs>
  )
}
