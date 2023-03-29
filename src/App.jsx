// Image
import profiles from "./assets/img/image 4.png";

// API
import { Skill_data } from "./api/Data_Skill";
import { Data_github } from "./api/Data_github";
import { Data_Contact } from "./api/Data_Contact";

// Component
import { Backtop } from "./components/backtop/backtop";
import { CardSkill } from "./components/card/CardSkill";
import { Navbars } from "./components/navbar/Navbars";
import { Sections } from "./components/sections/Sections";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/contact-mini/contact";
import { Forms } from "./components/form-input/Forms";

function App() {
  // Onclick Homepage button
  const onClickLengkap = (id) => {
    const val = document.getElementById(`section-${id}`);
    val.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg_1"></div>

      <Sections sId={1}>
        <Navbars />
        <div className="content">
          <h1>Saya seorang front-end engineer.</h1>
          <p>
            Sejak 5 tahun saya memulai blogging, dan 1 tahun memulai Front-End
            React.
          </p>
          <button type="button" onClick={() => onClickLengkap(2)}>
            Selengkapnya
          </button>
        </div>
      </Sections>

      <Sections sId={2}>
        <article className="profile">
          <h1>Profile</h1>
          <p>Mengenal saya secara singkat.</p>
          <div className="content-profile">
            <div className="left">
              <img src={profiles} alt="profile" />
              <div className="bg_img"></div>
            </div>
            <div className="right">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Ipsa, quis?. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Enim provident obcaecati ratione? Nesciunt
                reprehenderit sed et animi odio. Sed, quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Illum, quasi. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Ex magni aliquam in.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                doloremque delectus assumenda atque iusto in alias.
              </p>
            </div>
          </div>
        </article>
      </Sections>

      <Sections sId={3}>
        <h1>Skills</h1>
        <p>Beberapa kemampuan saya.</p>
        <div className="content-skill">
          {Skill_data.map((idf) => (
            <CardSkill
              key={idf.id}
              cImg={idf.img}
              cTitle={idf.title}
              cLevel={idf.lvl}
            />
          ))}
        </div>
      </Sections>

      <Sections sId={4}>
        <h1>Project</h1>
        <p>Beberapa proyek bikinan saya.</p>
        <Data_github />
      </Sections>

      <Sections sId={5}>
        <article className="content-contact">
          <div className="left">
            <h1>Contact</h1>
            <p>Beberapa cara menghubungi saya.</p>
            {Data_Contact.map((idc, index) => (
              <Contact
                key={index}
                cIco={idc.ico}
                cTitle={idc.title}
                cDesc={idc.desc}
              />
            ))}
          </div>
          <div className="right">
            <Forms />
          </div>
        </article>
      </Sections>

      <Footer />
      <Backtop />
    </>
  );
}

export default App;
