import React, { PropsWithChildren } from "react";

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header
      className="flex sticky top-0 
      shadow-[0_1px_10px_0_rgba(0,0,0,0.2)]
      px-4 py-2 gap-x-2"
    >
      {children}
    </header>
  );
};
