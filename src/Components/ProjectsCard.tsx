import Card from "./Card";
import { useState, useEffect } from "react";

interface ItemOfTheDataArray {
  image_id: string;
  title: string;
}

interface ProjectsListInterface {
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

function ProjectsCard() {
  const [projectsList, setProjectsList] = useState<ProjectsListInterface>();

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetch(`https://api.artic.edu/api/v1/artworks/`);

      const newProjectsList = await data.json();

      console.log("projects list", newProjectsList);

      setProjectsList(newProjectsList);
    };

    fetchProjects();
  }, []);

  return (
    <Card className="projects--card">
      <div>Projectos</div>

      {projectsList?.data && (
        <div className="projects--grid grid">
          {" "}
          {projectsList.data.map((project) => {
            return (
              <img
                className="projects--grid-cell"
                src={`https://www.artic.edu/iiif/2/${project.image_id}/full/843,/0/default.jpg`}
              ></img>
            );
          })}
        </div>
      )}
    </Card>
  );
}

export default ProjectsCard;
