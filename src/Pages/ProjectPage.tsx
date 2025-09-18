import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";

import type { ProjectInterface } from "../types/projects";
import StripHtml from "../Components/StripHtml";
import ButtonsGroup from "../Components/ButtonsGroup";
import Spacing from "../Components/Spacing";

function ProjectPage() {
  const params = useParams();

  const projectId = params.id;
  const [project, setProject] = useState<ProjectInterface>();

  useEffect(() => {
    const fetchProject = async () => {
      const data =
        await fetch(`https://api.artic.edu/api/v1/artworks/${projectId}
`);

      const newProject = await data.json();

      console.log("projects in the page", newProject);

      setProject(newProject);
    };

    fetchProject();
  }, []);

  return (
    <Card>
      <div className="projects--ctn flex-row">
        {project && (
          <>
            <div className="flex-column">
              <div className="project--header-ctn grid">
                <div className="flex-column flex-column--left">
                  <span>
                    {project.data.place_of_origin} | {project.data.date_end}{" "}
                  </span>

                  <h1 className="project--title">
                    {project.data.artwork_type_title}
                  </h1>
                  <p className="project--credit-line">
                    {project.data.credit_line}
                  </p>
                </div>

                <img
                  className="project--picture"
                  src={`https://www.artic.edu/iiif/2/${project.data.image_id}/full/843,/0/default.jpg`}
                  alt=""
                />
              </div>
              {project.data.description && (
                <StripHtml htmlText={project.data.description} />
              )}
            </div>
          </>
        )}
      </div>
      <Spacing height={40}></Spacing>


      <ButtonsGroup home={true} contact={true} about={true} />
    </Card>
  );
}

export default ProjectPage;
