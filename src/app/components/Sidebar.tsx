import React, { PropsWithChildren } from "react";
import { NavConfigItem } from "../pages/App/App";
import { BottomSidebar } from "./BottomSidebar";
import { Div } from "./Div";
import { Img } from "./Img";
import { MiddleSidebar } from "./MiddleSidebar";
import { TopSidebar } from "./TopSidebar";

interface Props extends PropsWithChildren<{}> {
  isCollapsed: boolean;
  navConfig: NavConfigItem[];
}

export const Sidebar: React.FC<Props> = ({ isCollapsed, navConfig }) => {
  return (
    <aside
      className={`border flex flex-col flex-shrink-0 items-center ${
        isCollapsed
          ? //closed
            "w-16"
          : //open
            "w-48"
      }`}
    >
      <TopSidebar>
        <Img src="/vite.svg" alt="placeholder" className="w-16 h-16" />
        <Div className={`${isCollapsed ? "hidden" : "block"}`}>
          Welcome back <span>Srdjan</span>
        </Div>
      </TopSidebar>
      <MiddleSidebar isCollapsed={isCollapsed} navConfig={navConfig} />
      <BottomSidebar>Documentation here</BottomSidebar>
    </aside>
  );
};
