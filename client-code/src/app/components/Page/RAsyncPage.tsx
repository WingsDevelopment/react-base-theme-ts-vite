import React, { PropsWithChildren } from "react";
import { AsyncContent } from "../wrappers/AsyncContent";
import { ILink, RBreadcrumbs } from "../wrappers/RBreadcrumbs";
import { RPageContent } from "./RPageContent";

interface Props extends PropsWithChildren<{}> {
  title: string;
  isContentLoading: boolean;
  breadcrumbsLinks?: ILink[];
  contentErrorMessage?: string;
}

export const RAsyncPage: React.FC<Props> = ({
  title,
  isContentLoading,
  breadcrumbsLinks,
  contentErrorMessage,
  children,
}) => {
  return (
    <RPageContent>
      <RBreadcrumbs heading={title} links={breadcrumbsLinks} />
      <AsyncContent
        isLoading={isContentLoading}
        errorMesssage={contentErrorMessage}
      >
        {children}
      </AsyncContent>
    </RPageContent>
  );
};
