import { useState, useEffect } from "react";

interface ItemOfTheDataArray {
  image_id: string;
  title: string;
}

interface ImageInterface {
  config: {
    iiif_url: string;
    website_url: string;
  };
  data: ItemOfTheDataArray[];
  info: {
    license_links: string[];
    license_text: string;
    version: string;
  };
  pagination: {
    current_page: number;
    limit: number;
    next_url: string;
    offset: number;
    total: number;
    total_pages: number;
  };
}

function RandomImage({ projectsList }) {
  // const [imagesList, setImagesList] = useState<ImageInterface>();

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const data = await fetch(`https://api.artic.edu/api/v1/artworks/`);

  //     const newImagesList = await data.json();

  //     console.log("randomImg", newImagesList);
  //     console.log("ImgId", newImagesList.data.image_id);
  //     setImagesList(newImagesList);
  //   };

  //   fetchImages();
  // }, []);

  return (
    <div>
      {/* {projectsList &&
        (() => {
          let itemNumber;
          let randomNumber;

          do {
            randomNumber = Math.floor(Math.random() * projectsList.data.length);
          } while (!projectsList.data[randomNumber].image_id);

          itemNumber = randomNumber; */}

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
            <div className="random-image flex-column flex-column--center">
              <img
                className="random-image--name"
                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                alt=""
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.artic.edu/iiif/2/efef304d-190c-294f-1cba-73374b3361a3/full/843,/0/default.jpg";
                }}
              />

              <span>{item.title}</span>
            </div>
          );
        })()}
    </div>
  );
}

export default RandomImage;
