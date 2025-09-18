import type { ProjectsListInterface } from "../types/projects";

interface RandomImageProps {
  projectsList?: ProjectsListInterface;
}

function RandomImage({ projectsList }: RandomImageProps) {
  return (
    <div>
      {projectsList &&
        (() => {
          const itemsWithImage = projectsList.data.filter(
            (item) =>
              item.image_id !== null &&
              item.image_id !== "" &&
              item.image_id !== "null"
          );

          const randomIndex = Math.floor(Math.random() * itemsWithImage.length);
          const item = itemsWithImage[randomIndex];

          return (
            <div className="random-image--ctn">
              <img
                className="random-image--img"
                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                alt=""
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.artic.edu/iiif/2/efef304d-190c-294f-1cba-73374b3361a3/full/843,/0/default.jpg";
                }}
              />

              <div className="random-image--overlay"></div>
            </div>
          );
        })()}
    </div>
  );
}

export default RandomImage;
