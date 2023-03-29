// Image
import logo from "../../assets/img/logo_.png";

// Component
import { Bground } from "../../components/background";

export const Home = () => {
  return (
    <>
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
              A clean and simple interface React <i>login</i> and{" "}
              <i>register</i> page, build from react js.
            </p>
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus modi impedit architecto officia sed cum libero.
              Sequi omnis ad laboriosam consequatur expedita architecto natus
              ullam repellat, quo ipsam possimus aspernatur.
            </p>
          </div>
        </div>
        <div className="right">
          <Bground />
        </div>
      </section>
    </>
  );
};
