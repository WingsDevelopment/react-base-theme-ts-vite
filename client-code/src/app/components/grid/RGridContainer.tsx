import React, { PropsWithChildren } from "react";
import { Div } from "../wrappers/Div";

interface Props extends PropsWithChildren {
  className?: string;
}

export const RGridContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <Div
      className={`flex flex-wrap flex-row box-border w-full ${
        className ? className : ""
      }`}
    >
      {children}
    </Div>
  );
};
