import Button from "./Button.tsx";
import Card from "./Card";
import RandomImage from "./RandomImage.tsx";

function WelcomeCard({projectsList}) {
  return (
    <>
      <Card className="welcome-card flex-row">
        <div className="welcome-card--text-ctn flex-column flex-column--left ">
          <h1>Pedro Amaro</h1>

          <h2>Architect</h2>
          <p className="welcome-card--bio">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Distinctioa magnam. Soluta perferendis culpa necessit
          </p>
          <Button text="Contact" link={"/contact/"}></Button>
        </div>

        <RandomImage projectsList={projectsList}></RandomImage>
      </Card>
    </>
  );
}

export default WelcomeCard;
