import React from "react";
import { useNavigate } from "react-router-dom";
import { NavConfigItem } from "../pages/App/App";
import { Div } from "./Div";
import { Img } from "./Img";

interface Props {
  isCollapsed: boolean;
  item: NavConfigItem;
}

export const NavItem: React.FC<Props> = ({ isCollapsed, item }) => {
  const navigate = useNavigate();
  return (
    <li className="w-full" onClick={() => navigate(item.path)}>
      <Div
        className={`cursor-pointer rounded-lg flex w-full pl-5 py-2 hover:bg-sky-700 ${
          item.active ? "bg-slate-500" : ""
        }`}
      >
        <Img src="/vite.svg" alt="placeholder" className="w-6 h-6 mr-5" />
        {!isCollapsed && <span>{item.name}</span>}
      </Div>
    </li>
  );
};
