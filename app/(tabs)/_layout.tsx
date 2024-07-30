import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor: "#FA6440"}}>
      <Tabs.Screen options={{title: "Home",
                tabBarIcon:({color}) => <FontAwesome size={35} name="home" color={color}/>}} name="(home)" />
      <Tabs.Screen options={{
        title: "Profile",
        tabBarIcon: ({color}) => <FontAwesome size={35} name="user" color={color}/>,
      }} name="(profile)" />
    </Tabs>
  );
}
