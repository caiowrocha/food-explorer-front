import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/DishDetails";
import { CreateDish } from "../pages/CreateDish";
import { EditDish } from "../pages/EditDish";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/createDish/" element={<CreateDish />} />
      <Route path="/editDish/:id" element={<EditDish />} />
    </Routes>
  );
};
