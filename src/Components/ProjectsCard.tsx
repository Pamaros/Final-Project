
import Card from "./Card";

import type { ProjectsListInterface } from "../types/projects";
import GalleryItem from "./galleryItem";

interface ProjectsCardProps {
  projectsList?: ProjectsListInterface;
}

function ProjectsCard({ projectsList }: ProjectsCardProps) {
  return (
    <Card className="projects--card">
      <div>Projectos</div>

      {projectsList?.data && (
        <div className="projects--grid grid">
          {" "}
          {projectsList.data
            .filter((project) => project.image_id)
            .map((project) => {
              return (
                <GalleryItem
                  imgCode={project.image_id}
                  artType={project.artwork_type_title}
                  artist={project.artist_title}
                  id={project.id}
                ></GalleryItem>
              );
            })}
        </div>
      )}
    </Card>
  );
}

export default ProjectsCard;
