import React from "react";
import { useSize } from "features/size/useSize";

export const Home = () => {
  const size = useSize();
  return <div>Home {size}</div>;
};
