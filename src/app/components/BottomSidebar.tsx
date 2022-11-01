import React, { PropsWithChildren } from "react";
import { Div } from "./Div";

interface Props extends PropsWithChildren<{}> {
  className?: string;
}

export const BottomSidebar: React.FC<Props> = ({ className, children }) => {
  return <Div className={className}>{children}</Div>;
};
