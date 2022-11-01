import React, { createContext, PropsWithChildren, useContext } from "react";

interface ThemeContext {
  mode: "" | "dark";
  setMode: (mode: "" | "dark") => void;
  theme: "blue" | "dark-blue" | "green" | "purple" | "red" | "yellow";
  setTheme: (
    theme: "blue" | "dark-blue" | "green" | "purple" | "red" | "yellow"
  ) => void;
  isStrached: boolean;
  setIsStrached: (strach: boolean) => void;
  direction: "ltr" | "rtl";
  setDirection: (direction: "ltr" | "rtl") => void;
  contrast: boolean;
  setContrast: (contrast: boolean) => void;
}

export const ThemeContext = createContext<ThemeContext | null>({
  mode: "",
  setMode: () => {},
  theme: "blue",
  setTheme: () => {},
  isStrached: false,
  setIsStrached: () => {},
  direction: "ltr",
  setDirection: () => {},
  contrast: false,
  setContrast: () => {},
});

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext context must be use inside ThemeProvider");

  return context;
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = React.useState<"" | "dark">("");
  const [theme, setTheme] = React.useState<
    "blue" | "dark-blue" | "green" | "purple" | "red" | "yellow"
  >("blue");
  const [isStrached, setIsStrached] = React.useState<boolean>(false);
  const [direction, setDirection] = React.useState<"ltr" | "rtl">("ltr");
  const [contrast, setContrast] = React.useState<boolean>(false);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        theme,
        setTheme,
        isStrached,
        setIsStrached,
        direction,
        setDirection,
        contrast,
        setContrast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
