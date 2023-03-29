import "./Navbars.scss";

export const Navbars = () => {
  const onClickNavbars = (id) => {
    const val = document.getElementById(`section-${id}`);
    val.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav id="nav">
        <header id="header">
          <h1 id="header-title">ID-Yuu</h1>
        </header>

        <ul id="nav-menu">
          <li>
            <a onClick={() => onClickNavbars(2)}>Profile</a>
          </li>
          <li>
            <a onClick={() => onClickNavbars(3)}>Skill</a>
          </li>
          <li>
            <a onClick={() => onClickNavbars(4)}>Projects</a>
          </li>
          <li>
            <a onClick={() => onClickNavbars(5)}>Contact</a>
          </li>
        </ul>
        <button id="nav-button" type="button" onClick={() => onClickNavbars(5)}>
          Kontak
        </button>
      </nav>
    </>
  );
};
