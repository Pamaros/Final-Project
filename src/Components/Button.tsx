import type { ButtonProps } from "../types/projects";

function Button({ text, link }: ButtonProps) {
  return (
    <button className="button" onClick={() => window.open(link, "_self")}>
      {text}
    </button>
  );
}

export default Button;
