import { useEffect, useState } from "react";
import ButtonsGroup from "./ButtonsGroup";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`nav-bar ${
        scrolled ? "nav-bar--visible" : "nav-bar--hidden"
      } flex-row`}
    >
      <ButtonsGroup contact={true} about={true} />
    </div>
  );
}

export default NavBar;
