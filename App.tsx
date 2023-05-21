import * as React from "react";
//navigation
import RootNavigation from "./src/navigation";

//redux
import {Provider} from "react-redux";
import store from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
