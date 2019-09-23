import React, { createContext, useState, useEffect } from "react";

export const screenSizeContext = createContext(window.innerWidth);

const { Provider } = screenSizeContext;

export const ScreenSizeProvider = (props: any) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setScreenSize]);
  return <Provider value={screenSize} {...props} />;
};
