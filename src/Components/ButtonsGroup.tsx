import ButtonAbout from "./ButtonAbout";
import Spacing from "./Spacing";
import ButtonContact from "./ButtonContact";
import ButtonHome from "./ButtonHome";

interface GroupButtonsProps {
  home?: boolean;
  about?: boolean;
  contact?: boolean;
}

function ButtonsGroup({ home = false, about = false, contact = false }: GroupButtonsProps) {
  return (
    <div className="flex-row">
      {home && (
        <>
          <ButtonHome /> <Spacing width={10} />
        </>
      )}
      {about && (
        <>
          <ButtonAbout /> <Spacing width={10} />
        </>
      )}
       {contact && (
        <>
          <ButtonContact/>
        </>
      )}
      
    </div>
  );
}

export default ButtonsGroup;
