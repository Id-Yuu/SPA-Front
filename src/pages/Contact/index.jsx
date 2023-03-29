// Image
import logo from "../../assets/img/logo_.png";

// Component
import { Bground } from "../../components/background";
import { Foot } from "../../components/Footer";

export const Contact = () => {
  return (
    <section id="section">
      <div className="left">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="title">
            Contact <b>Kodinger</b>
          </h1>
          <p className="contact">
            <span>example@mail.com</span>
            <span>081123456xxx</span>
            <span>@twitter</span>
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
