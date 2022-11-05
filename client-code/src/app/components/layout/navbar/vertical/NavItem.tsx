import React from "react";
import { useNavigate } from "react-router-dom";
import useActiveRoute from "../../../../hooks/useActiveRoute";
import { NavConfigItem } from "../../../../pages/App";
import { Div } from "../../../wrappers/Div";

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
