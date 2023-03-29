import { NavLink, Outlet } from "react-router-dom";

// Image
import logo from "../../assets/img/logo_.png";

// Component
import { Bground } from "../../components/background";
import { Foot } from "../../components/Footer";

export const AuthLayout = () => {
  return (
    <section id="section">
      <div className="left">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="title">
            Welcome to <b>Kodinger</b>
          </h1>
          <p className="desc">
            Before you get started, you must login or register if you don't
            already have an account.
          </p>
          <div className="nav-auth">
            <NavLink to="login">Login</NavLink>
            <NavLink to="register">Register</NavLink>
          </div>
          <Outlet />
        </div>
        <Foot />
      </div>
      <div className="right">
        <Bground />
      </div>
    </section>
  );
};
