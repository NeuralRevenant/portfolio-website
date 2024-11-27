import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeCompare,
  faCodeBranch,
  faCoffee,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const CornerIcons = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCodeCompare} className="corner-icon top-left" />
      <FontAwesomeIcon icon={faCodeBranch} className="corner-icon top-right" />
      <FontAwesomeIcon icon={faCoffee} className="corner-icon bottom-left" />
      <FontAwesomeIcon
        icon={faLightbulb}
        className="corner-icon bottom-right"
      />
    </>
  );
};

export default CornerIcons;
