import React, { PropsWithChildren } from "react";

export const TopSidebar: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col items-center mb-5">{children}</div>;
};
