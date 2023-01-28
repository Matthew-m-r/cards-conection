import MainLayout from "../layouts/mainLayout/mainLayout.component";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home.page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
