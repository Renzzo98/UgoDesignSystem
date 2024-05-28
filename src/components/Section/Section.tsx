import "./Section.css";
import { FC } from "react";

interface SectionProps {
  header: string;
  desc?: string;
  divider?: boolean;
  topSpacing?: number;
  botSpacing?: number;
  darkBackground?: boolean;
  childComponent?: React.ReactNode; // Type for the component prop
  refPointer?: React.RefObject<HTMLDivElement>;
}

const Section: FC<SectionProps> = ({
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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: topSpacing ? topSpacing : 40,
        paddingBottom: botSpacing ? botSpacing : 0,
      }}
    >
      <p className={`section-header ${darkBackground ? "dark" : ""}`}>
        {header.toUpperCase()}
      </p>
      {divider ? (
        <hr className={`section-divider ${darkBackground ? "dark" : ""}`} />
      ) : (
        <div />
      )}
      {desc ? (
        <p className={`section-desc ${darkBackground ? "dark" : ""}`}>{desc}</p>
      ) : (
        ""
      )}
      {childComponent}
    </div>
  );
};

export default Section;
