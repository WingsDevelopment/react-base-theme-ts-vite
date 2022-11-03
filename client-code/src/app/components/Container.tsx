import React, { PropsWithChildren } from "react";
import { Div } from "./Div";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <Div className="flex">{children}</Div>;
};
