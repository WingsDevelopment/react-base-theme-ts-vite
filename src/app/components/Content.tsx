import React, { PropsWithChildren } from "react";
import { Div } from "./Div";

interface Props extends PropsWithChildren<{}> {
  isStrached?: boolean;
}

export const Content: React.FC<Props> = ({ isStrached, children }) => {
  return (
    <Div className={` ${isStrached ? "m-8" : "mx-64 my-8"}`}>{children}</Div>
  );
};
