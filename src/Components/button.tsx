function Button({ text, link }) {
  return (
    <button className="button" onClick={() => window.open(link, "_self")}>
      {text}
    </button>
  );
}

export default Button;
