import React, { PropsWithChildren } from "react";
import { useThemeContext } from "../../providers/ThemeProvider";
import { Content } from "../wrappers/Content";
import { Div } from "../wrappers/Div";

export const RPageContent: React.FC<PropsWithChildren> = ({ children }) => {
  const { isStrached } = useThemeContext();

  return <Content isStrached={isStrached}>{children}</Content>;
};
