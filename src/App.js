import React from "react";

import store from "./store";
//组件
import DSYMain from "./pages/main/index";

// import { Provider, KeepAlive } from "react-keep-alive";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <DSYMain />
    </Provider>
  );
}

export default App;
