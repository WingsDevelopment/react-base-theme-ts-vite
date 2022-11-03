import React, { PropsWithChildren } from "react";
import { Div } from "./Div";

interface Props extends PropsWithChildren<{}> {
  className?: string;
}

export const Grid: React.FC<Props> = ({ className, children }) => {
  return <Div className={"grid " + className}>{children}</Div>;
};
