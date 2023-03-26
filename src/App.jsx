import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Restaurant } from "./components/Restaurant/Restaurant";
import { CartPage } from "./pages/CartPage/CartPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { Menu } from "./components/Menu/Menu";
import { Review } from "./components/Review/Review";
import { Reviews } from "./components/Reviews/Reviews";
import { DishesPage } from "./pages/DishesPage/DishesPage";
import { DishPage, SingleDishPage } from "./pages/DishPage/DishPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="restaurants" element={<RestaurantPage />}>
            <Route index element={<span>Select restaurant</span>} />
            <Route path=":restaurantId" element={<Restaurant />}>
              <Route path="menu" element={<Menu />} />
              <Route path="review" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="dishes">
            <Route index element={<DishesPage />} />
            <Route path=":dishId" element={<DishPage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="redirect" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
