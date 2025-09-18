import { useState } from "react";
import { Link } from "react-router-dom";

interface GalleryItemProps {
  imgCode: string;
  artType: string;
  artist: string;
  id: number;
}

function GalleryItem({ imgCode, artType, artist, id }: GalleryItemProps) {
  const [hasError, setHasError] = useState(false);

  const shouldRenderImage =
    imgCode && imgCode !== "" && imgCode !== "null" && !hasError;

  return (
    <div className="projects--grid-item ">
      <Link to={`/project/${id}`}>
        <div className="projects--grid-item--ctn flex-column flex-column--left">
          {shouldRenderImage ? (
            <img
              className="projects--grid-item--image"
              src={`https://www.artic.edu/iiif/2/${imgCode}/full/843,/0/default.jpg`}
              alt={artType}
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="projects--grid-item--image--error"></div>
          )}
          <span className="projects--grid-item--art-type">{artType}</span>
          <span>{artist}</span>
        </div>
      </Link>
    </div>
  );
}

export default GalleryItem;
