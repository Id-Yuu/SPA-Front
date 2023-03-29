// Image
import logo from "../../assets/img/logo_.png";

// Component
import { Bground } from "../../components/background";
import { Foot } from "../../components/Footer";

export const About = () => {
  return (
    <section id="section">
      <div className="left">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="title">
            About <b>Kodinger</b>
          </h1>
          <p className="desc">
            A clean and simple interface React <i>login</i> or <i>register</i>{" "}
            page, build from react js.
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut placeat ipsum, veniam incidunt assumenda eaque odit error quos
            dicta impedit dolor neque maiores vitae!
          </p>
        </div>
        <Foot />
      </div>
      <div className="right">
        <Bground />
      </div>
    </section>
  );
};
