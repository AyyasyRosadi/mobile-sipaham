import Route from "./src/UI/Route";
import { TriggerProvider } from "./src/provider/Context";
import Provider_ from "./src/provider/Provider";
import React from "react";

export default function App() {
  return (
    <Provider_>
      <TriggerProvider>
        <Route />
      </TriggerProvider>
    </Provider_>
  );
}
