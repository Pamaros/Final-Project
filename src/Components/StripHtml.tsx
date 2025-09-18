import { useMemo } from "react";

interface PlainTextProps {
  htmlText: string;
}

function StripHtml({ htmlText }: PlainTextProps) {
  const text = useMemo(function () {
    const doc = new DOMParser().parseFromString(htmlText, "text/html");
    return doc.body.textContent || "";
  }, [htmlText]);

  return <p className="project--description">{text}</p>;
}

export default StripHtml;