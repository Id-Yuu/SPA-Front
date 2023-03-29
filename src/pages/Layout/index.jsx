import { Outlet } from "react-router-dom";

// Component
import { Navbars } from "../../components/Navbar";

export const Root = () => {
  return (
    <div id="container">
      <Outlet />
      <Navbars />
    </div>
  );
};
