import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<{}> {
  additionalStyle?: string;
  onClick?: () => void;
}

export const RButton: React.FC<Props> = ({
  additionalStyle,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
