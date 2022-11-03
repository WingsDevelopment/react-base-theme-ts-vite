import React, { PropsWithChildren } from "react";
import { useThemeContext } from "../../../theme-code/providers/ThemeProvider";
import { Div } from "../Div";

export const RPageContent: React.FC<PropsWithChildren> = ({ children }) => {
  const { isStrached } = useThemeContext();

  return (
    <Div className={` ${isStrached ? "m-8" : "mx-64 my-8"}`}>{children}</Div>
  );
};
