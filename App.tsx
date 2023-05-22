import * as React from "react";
import {MD3LightTheme as DefaultTheme, PaperProvider} from "react-native-paper";

//navigation
import RootNavigation from "./src/navigation";

//redux
import {Provider} from "react-redux";
import store from "./src/redux";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: "tomato", your custom color
    // secondary: "yellow",
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <RootNavigation />
      </PaperProvider>
    </Provider>
  );
}
