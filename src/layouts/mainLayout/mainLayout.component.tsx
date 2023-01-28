import { Outlet } from "react-router-dom";
import "./mainLayout.styles.scss";

const MainLayouts = () => {
  return (
    <div className="main-layout-container">
      <Outlet />
    </div>
  );
};

export default MainLayouts;
