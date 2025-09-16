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

function RandomImage() {
  const [randomImage, setRandomImage] = useState<ImageInterface>();

  useEffect(() => {
    const fetchRandomImage = async () => {
      const data = await fetch(`https://api.artic.edu/api/v1/artworks/`);

      const newRandomImage = await data.json();

      console.log("randomImg", newRandomImage);
      console.log("ImgId", newRandomImage.data.image_id);
      setRandomImage(newRandomImage);
    };

    fetchRandomImage();
  }, []);

  return (
    <div>
      {randomImage &&
        (() => {
          const randomNumber = Math.floor(
            Math.random() * randomImage.data.length
          );
          return (
            <div className="random-image flex-column flex-column--center">
              <img className="random-image--name"
                src={`https://www.artic.edu/iiif/2/${randomImage.data[randomNumber].image_id}/full/843,/0/default.jpg`}
                alt=""
              />

              <span>{randomImage.data[randomNumber].title}</span>
            </div>
          );
        })()}
    </div>
  );
}

export default RandomImage;
