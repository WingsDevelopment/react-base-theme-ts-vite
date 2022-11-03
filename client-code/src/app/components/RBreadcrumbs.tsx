import React from "react";
import { useNavigate } from "react-router-dom";

export interface ILink {
  name: string;
  path: string;
}

interface Props {
  heading?: string;
  links?: ILink[];
}

export const RBreadcrumbs: React.FC<Props> = ({ heading, links }) => {
  const navigate = useNavigate();
  return (
    <div>
      {heading && <h1 className="text-2xl font-bold">{heading}</h1>}
      {links && (
        <div className="flex flex-row">
          {links.map((link, index) => {
            return (
              <div key={index} className="flex flex-row">
                <span
                  className="cursor-pointer"
                  onClick={() => navigate(link.path)}
                >
                  {link.name}
                </span>
                {index < links.length - 1 && <span className="mx-2">/</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
