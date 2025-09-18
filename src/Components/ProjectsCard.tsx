import { Link } from "react-router-dom";
import Card from "./Card";

import type { ProjectsListInterface } from "../types/projects";

interface ProjectsCardProps {
  projectsList?: ProjectsListInterface; 
}

function ProjectsCard({projectsList}: ProjectsCardProps) {


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
