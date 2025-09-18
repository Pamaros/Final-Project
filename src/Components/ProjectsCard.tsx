import { Link } from "react-router-dom";
import Card from "./Card";
import { useState, useEffect } from "react";

import type { ProjectsListInterface } from "../types/projects";

function ProjectsCard({projectsList}) {
  // const [projectsList, setProjectsList] = useState<ProjectsListInterface>();

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const data = await fetch(
  //       `https://api.artic.edu/api/v1/artworks?page=2&limit=100`
  //     );

  //     const newProjectsList = await data.json();

  //     console.log("projects list", newProjectsList);

  //     setProjectsList(newProjectsList);
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <Card className="projects--card">
      <div>Projectos</div>

      {projectsList?.data && (
        <div className="projects--grid grid">
          {" "}
          {projectsList.data
            .filter((project) => project.image_id)
            .map((project) => {
              project.image_id;

              return (
                <Link to={`/project/${project.id}`}>
                  <img
                    className="projects--grid-cell"
                    src={`https://www.artic.edu/iiif/2/${project.image_id}/full/843,/0/default.jpg`}
                  ></img>
                </Link>
              );
            })}
        </div>
      )}
    </Card>
  );
}

export default ProjectsCard;
