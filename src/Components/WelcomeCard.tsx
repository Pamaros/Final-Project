import Card from "./Card";
import RandomImage from "./RandomImage.tsx";

import type { ProjectsListInterface } from "../types/projects";
import ButtonContact from "./ButtonContact.tsx";
import ButtonAbout from "./ButtonAbout.tsx";
import Spacing from "./Spacing";

interface WelcomeCardProps {
  projectsList?: ProjectsListInterface;
}

function WelcomeCard({ projectsList }: WelcomeCardProps) {
  return (
    <>
      <Card className="welcome-card flex-row">
        <div className="welcome-card--text-ctn flex-column flex-column--left ">
          <h1>Pedro Amaro</h1>

          <h2>Architect</h2>
          <p className="welcome-card--bio">
            An architect focused on creating functional and thoughtful spaces.
            His work emphasizes simplicity, light, and the needs of the people
            who use them.
          </p>
          <div className="flex-row">
            <ButtonContact></ButtonContact>
            <Spacing width={10} />
            <ButtonAbout></ButtonAbout>
          </div>
        </div>

        <RandomImage projectsList={projectsList}></RandomImage>
      </Card>
    </>
  );
}

export default WelcomeCard;
