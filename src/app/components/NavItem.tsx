import React from "react";
import { useNavigate } from "react-router-dom";
import useActiveRoute from "../../theme-code/hooks/useActiveRoute";
import { NavConfigItem } from "../pages/App/App";
import { Div } from "./Div";

interface Props {
  isCollapsed: boolean;
  item: NavConfigItem;
}

export const NavItem: React.FC<Props> = ({ isCollapsed, item }) => {
  const { active } = useActiveRoute(item.path);

  const navigate = useNavigate();
  return (
    <li className="w-full" onClick={() => navigate(item.path)}>
      <Div
        className={`cursor-pointer rounded-lg flex w-full pl-5 py-2 hover:bg-sky-700 ${
          active ? "bg-slate-500" : ""
        }`}
      >
        {item.icon && item.icon}
        {!isCollapsed && <span>{item.name}</span>}
      </Div>
    </li>
  );
};
