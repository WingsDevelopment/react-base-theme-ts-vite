import React from "react";
import { useNavigate } from "react-router-dom";

export interface ILink {
  name: string;
  href: string;
}

interface Props {
  heading?: string;
  links?: ILink[];
  breadcrumbAction?: React.ReactNode;
}

export const RBreadcrumbs: React.FC<Props> = ({
  heading,
  links,
  breadcrumbAction,
}) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 content-between">
      <div>
        {heading && <h1 className="text-2xl font-bold">{heading}</h1>}
        {links && (
          <div className="flex flex-row">
            {links.map((link, index) => {
              return (
                <div key={index} className="flex flex-row">
                  <span
                    className="cursor-pointer"
                    onClick={() => navigate(link.href)}
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
      {breadcrumbAction && (
        <div className="flex flex-row justify-end">{breadcrumbAction}</div>
      )}
      {!breadcrumbAction && <div></div>}
    </div>
  );
};
