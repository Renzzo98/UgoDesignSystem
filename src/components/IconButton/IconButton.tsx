import "./IconButton.css";

import { FC } from "react";
// import { useGlobalState } from '../../GlobalStateProvider';
import { motion } from "framer-motion";

interface IconButtonButtonProps {
  id: number;
  link: string;
  iconPath: string;
  activeIcon?: string;
  scrollFunction?: () => void;
}

const IconButton: FC<IconButtonButtonProps> = ({
  id,
  link,
  iconPath,
  activeIcon,
  scrollFunction,
}) => {
  //const { activePage, setActivePage } = useGlobalState();

  function setPageID(pageID: number, scrollFunc: () => void): void {
    // setActivePage(pageID);
    scrollFunc();
    // console.log('Current Page is ' + activePage);
  }

  return (
    <div>
      {link === "" && scrollFunction ? (
        0 === id ? (
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeatDelay: 1,
            }}
          >
            <img
              onClick={() => setPageID(id, scrollFunction)}
              src={activeIcon}
              alt="Social Media Path"
              className="image-hover-effect"
            />
          </motion.div>
        ) : (
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeatDelay: 1,
            }}
          >
            <img
              onClick={() => setPageID(id, scrollFunction)}
              src={iconPath}
              alt="Social Media Path"
              className="image-hover-effect"
            />
          </motion.div>
        )
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1.5, 1],
              rotate: [0, 360],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "backOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeatDelay: 1,
            }}
          >
            <img
              src={iconPath}
              alt="Social Media Path"
              className="image-hover-effect"
            />
          </motion.div>
        </a>
      )}
    </div>
  );
};

export default IconButton;
