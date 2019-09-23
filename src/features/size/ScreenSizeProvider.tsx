import React, { createContext, useState, useEffect } from "react";
import { MOBILE_BREAKPOINT, SIZE } from "./const";

const getSize = () =>
  window.innerWidth < MOBILE_BREAKPOINT ? SIZE.MOBILE : SIZE.DESKTOP;

export const screenSizeContext = createContext(getSize());

const { Provider } = screenSizeContext;

export const ScreenSizeProvider = (props: any) => {
  const [screenSize, setScreenSize] = useState(getSize());
  useEffect(() => {
    const onResize = () => {
      setScreenSize(getSize());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setScreenSize]);
  return <Provider value={screenSize} {...props} />;
};
