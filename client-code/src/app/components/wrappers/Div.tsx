import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<{}> {
  className?: string;
}

export const Div: React.FC<Props> = ({ className, children }) => {
  return <div className={className ? className : ""}>{children}</div>;
};
