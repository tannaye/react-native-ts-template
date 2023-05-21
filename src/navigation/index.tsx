//packages
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";

//navigation
import BottomNav from "@src/navigation/BottomNav";

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  );
};

export default RootNavigation;
