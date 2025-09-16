import Button from "./button.tsx";
import Card from "./Card";
import RandomImage from "./RandomImage.tsx";

function WelcomeCard() {
  return (
    <>
      <Card className="welcome-card flex-row">
        <div className="welcome-card--text-ctn flex-column flex-column--left ">
            <h1>Pedro Amaro</h1>

            <h2>Architect</h2>
          <p className="welcome-card--bio">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctioa magnam. Soluta perferendis culpa necessit
          </p>
          <Button text="Contact" link={"/contact/"}></Button>
        </div>

        <RandomImage></RandomImage>
      </Card>
    </>
  );
}

export default WelcomeCard;
