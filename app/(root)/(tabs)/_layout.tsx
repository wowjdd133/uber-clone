import { Tabs } from "expo-router";
import { Image, View } from "react-native";

const TabIcon = () => {
  return (
    <View>
      <View>
        <Image />
      </View>
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <TabIcon />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
