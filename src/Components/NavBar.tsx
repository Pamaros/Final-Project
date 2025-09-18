import { useEffect, useState } from "react";
import Button from "./Button";
import ButtonContact from "./ButtonContact";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`nav-bar ${scrolled ? "nav-bar--visible" : "nav-bar--hidden"}`}
    >
      <Button text="About" link={"/about/"}></Button>
      <ButtonContact></ButtonContact>
    </div>
  );
}

export default NavBar;
