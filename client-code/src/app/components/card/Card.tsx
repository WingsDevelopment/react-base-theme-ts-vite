import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<{}> {
  additionalStyle?: string;
}

export const Card: React.FC<Props> = ({ additionalStyle, children }) => {
  return (
    <div
      className={`shadow rounded-xl p-5 dark:bg-slate-700 ${
        additionalStyle ? additionalStyle : ""
      }`}
    >
      {children}
    </div>
  );
};
