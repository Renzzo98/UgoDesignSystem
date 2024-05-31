import "./ugo-icon-button.css";

import { StyleTypes } from "../../models/constants/styleTypes";

import { FC } from "react";
interface UgoIconButtonProps {
  link: string;
  type: StyleTypes;
  iconPath: string;
  iconSize?: number;
  sideText?: string;
  scrollFunction?: () => void;
}

const UgoIconButton: FC<UgoIconButtonProps> = ({
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
          <div className="ugo-icon-button-container hover-effect">
            <img
              onClick={() => link? openLink(link) : {}}
              src={iconPath}
              style={{
                height: `${iconSize}rem`,
                width: `${iconSize}rem`
              }}
              alt="Social Media Path"
              className="ugo-icon primary-icon"
            />
          </div>
        );
      case StyleTypes.Secondary:
        return (
          <div className="ugo-icon-button-container hover-effect">
            <img
              onClick={() => link? openLink(link) : {}}
              src={iconPath}
              style={{
                height: `${iconSize}rem`,
                width: `${iconSize}rem`
              }}
              alt="Social Media Path"
              className="ugo-icon secondary-icon"
            />
          </div>
        );
      default:
        return (
          <div className="ugo-icon-button-container hover-effect">
            <img
              onClick={() => link? openLink(link) : {}}
              src={iconPath}
              style={{
                height: `${iconSize}rem`,
                width: `${iconSize}rem`
              }}
              alt="Social Media Path"
              className="ugo-icon"
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

export default UgoIconButton;
