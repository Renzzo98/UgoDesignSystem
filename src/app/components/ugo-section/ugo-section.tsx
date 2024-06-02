import "./ugo-section.css";

import { FC } from "react";

interface UgoSectionProps {
  header: string;
  desc?: string;
  divider?: boolean;
  topSpacing?: number;
  botSpacing?: number;
  darkBackground?: boolean;
  childComponent?: React.ReactNode; // Type for the component prop
  refPointer?: React.RefObject<HTMLDivElement>;
}

const UgoSection: FC<UgoSectionProps> = ({
  header,
  desc,
  divider = true,
  topSpacing,
  botSpacing,
  darkBackground,
  childComponent,
}) => {
  return (
    <div
      className="ugo-section-container"
      style={{
        paddingTop: topSpacing ? topSpacing : 40,
        paddingBottom: botSpacing ? botSpacing : 0,
      }}
    >
      <p className={`ugo-section-header ${darkBackground ? "dark" : ""}`}>
        {header.toUpperCase()}
      </p>
      {divider ? (
        <hr className={`ugo-section-divider ${darkBackground ? "dark" : ""}`} />
      ) : (
        <div />
      )}
      {desc ? (
        <p className={`ugo-section-desc ${darkBackground ? "dark" : ""}`}>{desc}</p>
      ) : (
        ""
      )}
      {childComponent}
    </div>
  );
};

export default UgoSection;
