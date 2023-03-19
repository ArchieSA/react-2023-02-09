import React from "react";
import { Provider } from "react-redux";
import { Header } from "./components/Header/Header";

import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RestaurantPage />
      </div>
    </Provider>
  );
};
