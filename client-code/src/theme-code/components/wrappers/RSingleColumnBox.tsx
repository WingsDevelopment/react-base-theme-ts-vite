import React, { PropsWithChildren } from "react";

export const RSingleColumnBox: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-1 gap-4 ">{children}</div>;
};
