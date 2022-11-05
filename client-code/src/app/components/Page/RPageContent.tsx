import React, { PropsWithChildren } from "react";
import { useThemeContext } from "../../providers/ThemeProvider";
import { Div } from "../wrappers/Div";

export const RPageContent: React.FC<PropsWithChildren> = ({ children }) => {
  const { isStrached } = useThemeContext();

  return (
    <Div className={`w-full ${isStrached ? "m-8" : "mx-64 my-8"}`}>
      {children}
    </Div>
  );
};
