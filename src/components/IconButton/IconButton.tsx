import "./IconButton.css";

import { FC } from "react";
import { StyleTypes } from "../../constants/styleTypes";

interface IconButtonButtonProps {
  link: string;
  type: StyleTypes;
  iconPath: string;
  iconSize?: number;
  sideText?: string;
  scrollFunction?: () => void;
}

const IconButton: FC<IconButtonButtonProps> = ({
  link,
  type,
  iconPath,
  iconSize,
  sideText,
  scrollFunction,
}) => {

  //const { activePage, setActivePage } = useGlobalState();

  function setPageID(pageID: number, scrollFunc: () => void): void {
    scrollFunc();
  }

  function openLink(link: string) {
    window.open(link, "_blank");
  }

  const renderButtonType = () => {
    switch (type) {
      case StyleTypes.Primary:
        return (
          <div className="icon-button-container hover-effect">
            <img
              onClick={() => link? openLink(link) : {}}
              src={iconPath}
              style={{
                height: `${iconSize}rem`,
                width: `${iconSize}rem`
              }}
              alt="Social Media Path"
              className="icon primary-icon"
            />
          </div>
        );
      case StyleTypes.Secondary:
        return (
          <div className="icon-button-container hover-effect">
            <img
              onClick={() => link? openLink(link) : {}}
              src={iconPath}
              style={{
                height: `${iconSize}rem`,
                width: `${iconSize}rem`
              }}
              alt="Social Media Path"
              className="icon secondary-icon"
            />
          </div>
        );
      default:
        return (
          <div className="icon-button-container hover-effect">
            <img
              onClick={() => link? openLink(link) : {}}
              src={iconPath}
              style={{
                height: `${iconSize}rem`,
                width: `${iconSize}rem`
              }}
              alt="Social Media Path"
              className="icon"
            />
          </div>
        );
    }
  };

  return (
    <div>
      {renderButtonType()}
    </div>
  );
};

export default IconButton;
