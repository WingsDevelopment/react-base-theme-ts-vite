import React, { PropsWithChildren } from "react";
import { Div } from "./Div";

interface Props extends PropsWithChildren<{}> {
  isStrached?: boolean;
}

export const RContent: React.FC<Props> = ({ isStrached, children }) => {
  return (
    <div className={`${isStrached ? "strached-content" : "normal-content"}`}>
      {children}
    </div>
  );
};
