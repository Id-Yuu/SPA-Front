import { useEffect, useState } from "react";
import "./backtop.scss";

export const Backtop = () => {
  const [backTop, setBackTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  return (
    <>
      {backTop && (
        <button onClick={scrollToTop} className="backtop">
          &#8679;
        </button>
      )}
    </>
  );
};
