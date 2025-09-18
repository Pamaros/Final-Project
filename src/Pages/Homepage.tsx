
import "../styles/main.css";
import WelcomeCard from "../Components/WelcomeCard";


import ProjectsCard from "../Components/ProjectsCard";
import { useEffect, useState } from "react";


import type { ProjectsListInterface } from "../types/projects";

function Homepage() {


  const [projectsList, setProjectsList] = useState<ProjectsListInterface>();

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=2&limit=100`
      );

      const newProjectsList: ProjectsListInterface = await data.json();

      console.log("projects list", newProjectsList);

      setProjectsList(newProjectsList);
    };

    fetchProjects();
  }, []);





  return (
    <>
      <WelcomeCard projectsList={projectsList}></WelcomeCard>
      <ProjectsCard projectsList={projectsList}></ProjectsCard>
    </>
  );
}

export default Homepage;
