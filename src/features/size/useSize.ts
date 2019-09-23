import { useContext } from "react";
import { screenSizeContext } from "./ScreenSizeProvider";

export const useSize = () => {
  const size = useContext(screenSizeContext);
  return size;
};
