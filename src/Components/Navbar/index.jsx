import { NavLink } from "react-router-dom";

// Image
import logo from "../../assets/logo.png";

// Router change Navlink
export const NavData = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "product",
    text: "Product",
  },
  {
    link: "pricing",
    text: "Pricing",
  },
  {
    link: "contact",
    text: "Contact",
  },
];

// Component Navlink from react-router
export const Navl = ({ toLink, toText }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending ? "p-3 font-medium" : isActive ? "p-3 font-bold" : "p-3"
      }
      to={toLink}
    >
      {toText}
    </NavLink>
  );
};

// Main Navbar
export const Navbars = () => {
  return (
    <nav className="box-border p-5">
      <div className="flex flex-row justify-between items-center">
        <header className="flex flex-row gap-2 items-center justify-center">
          <img className="max-w-[50px] max-h-[50px]" src={logo} alt="logo" />
          <h1 className="font-dms font-bold text-lg">Header</h1>
        </header>
        <ul className="flex flex-row justify-center items-center">
          {NavData.map((ic, index) => (
            <li key={index}>
              <Navl toLink={ic.link} toText={ic.text} />
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="bg-black p-2 px-5 hidden lg:block rounded-full text-white"
        >
          My Account
        </button>
      </div>
    </nav>
  );
};
