import React, { PropsWithChildren } from "react";

export type ButtonVariant = "contained" | "outlined" | "soft" | "text";
export type ButtonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

export type ButtonType = "button" | "submit" | "reset";

interface Props extends PropsWithChildren<{}> {
  additionalStyle?: string;
  type?: ButtonType;
  onClick?: () => void;
}

export const RButton: React.FC<Props> = ({
  additionalStyle,
  type,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-skin-primary font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
