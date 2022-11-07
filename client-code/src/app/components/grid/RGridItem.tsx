import React, { PropsWithChildren } from "react";
import { Div } from "../wrappers/Div";

interface Props extends PropsWithChildren {
  size: number;
}

export const RGridItem: React.FC<Props> = ({ size, children }) => {
  const max = 12;
  const percentage = (size / max) * 100;

  return (
    <Div
      className="flex-grow-0 min-w-fit"
      style={{
        maxWidth: `${percentage}%`,
        flexBasis: `${percentage}%`,
      }}
    >
      {children}
    </Div>
  );
};
