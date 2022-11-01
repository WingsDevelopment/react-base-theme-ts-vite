import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { NavConfigItem } from "../pages/App/App";
import { Div } from "./Div";
import { NavItem } from "./NavItem";

interface Props extends PropsWithChildren<{}> {
  className?: string;
  navConfig: NavConfigItem[];
  isCollapsed: boolean;
}

export const MiddleSidebar: React.FC<Props> = ({
  navConfig,
  isCollapsed,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <Div className="flex-grow-0 w-full">
      <ul>
        {navConfig.map((item, index) => {
          return (
            <NavItem isCollapsed={isCollapsed} item={item} key={item.path} />
          );
        })}
      </ul>
    </Div>
  );
};
