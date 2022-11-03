import React, { PropsWithChildren } from "react";
import { ILink, RBreadcrumbs } from "../RBreadcrumbs";
import { RPageContent } from "./RPageContent";

interface Props extends PropsWithChildren<{}> {
  title: string;
  breadcrumbsLinks?: ILink[];
}

export const RPage: React.FC<Props> = ({
  title,
  breadcrumbsLinks,
  children,
}) => {
  return (
    <RPageContent>
      <RBreadcrumbs heading={title} links={breadcrumbsLinks} />
      {children}
    </RPageContent>
  );
};
