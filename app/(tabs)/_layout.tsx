import React, { useState } from "react";
import { Tabs } from "expo-router";

import { useColorScheme } from "@/components/useColorScheme";
import { HeartIcon, HistoryIcon, HomeIcon, UserIcon } from "@/assets/icons";
import { Colors, SPACING, TYPOGRAPHY } from "@/src/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IScreenItem {
  key: number;
  name: string;
  title: string;
  component: React.ElementType;
}

const screens: IScreenItem[] = [
  {
    key: 1,
    name: "home",
    title: "Home",
    component: HomeIcon,
  },
  {
    key: 2,
    name: "favoritesTab",
    title: "favoritesTab",
    component: HeartIcon,
  },
  {
    key: 2,
    name: "profileTab",
    title: "profileTab",
    component: UserIcon,
  },
  {
    key: 2,
    name: "historyTab",
    title: "historyTab",
    component: HistoryIcon,
  },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [isTabsVisible, setIsTabsVisible] = useState(true);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.mainColor,
        tabBarInactiveTintColor: "#ADADAF",
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: TYPOGRAPHY.FONT_SIZE_10,
          fontWeight: "500",
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#F2F2F2",
          elevation: 0,
          height: SPACING.SCALE_60 + insets.bottom,
        },
        tabBarItemStyle: {
          paddingBottom: SPACING.SCALE_5,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="favoritesTab"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <HeartIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profileTab"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="historyTab"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <HistoryIcon color={color} />,
        }}
      />
      {/* {screens.map((item) => (
        <Tabs.Screen
          key={item.key}
          name={item.name}
          options={{
            title: "",
            tabBarIcon: ({ color }) => <item.component color={color} />,
          }}
        />
      ))} */}
    </Tabs>
  );
}
