//package
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//app routes
import AppRoute from "./app-routes";

//screens
import {HomeScreen, SettingsScreen, ProfileScreen} from "@src/ui/screens/index";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={AppRoute.HOME} component={HomeScreen} />
      <Tab.Screen name={AppRoute.SETTINGS} component={SettingsScreen} />
      <Tab.Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNav;
