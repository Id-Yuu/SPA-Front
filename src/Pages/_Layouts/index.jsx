import { Outlet } from "react-router-dom";

// Component
import { Navbars } from "../../Components/Navbar";
import { Section } from "../../Components/Sections";

export const Root = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-[#DAF2FF] to-[#B8E3FC]">
      <div className="container flex flex-col max-w-6xl mx-auto">
        <Navbars />
        <Section>
          <Outlet />
        </Section>
      </div>
    </div>
  );
};
