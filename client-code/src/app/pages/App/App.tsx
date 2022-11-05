import { lazy, Suspense, useState } from "react";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useThemeContext } from "../../../theme-code/providers/ThemeProvider";
import { RButton } from "../../../theme-code/components/wrappers/RButton";
import { navConfig } from "../../../theme-code/routing/navConfig";
import Router from "./Router";
// import Home from "../Home";
// import Settings from "../Settings";
// import TestPage from "../TestPage";
// import Users from "../Users";

export interface NavConfigItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
  active?: boolean;
}

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { mode, setMode, theme, setTheme, isStrached, setIsStrached } =
    useThemeContext();

  return (
    <div className={`${mode} ${theme}`}>
      <div className="bg-slate-50 dark:bg-slate-800 dark:text-slate-50 min-h-screen">
        <Header>
          <RButton onClick={() => setIsCollapsed(!isCollapsed)}>TT</RButton>
          <RButton onClick={() => setMode(mode === "" ? "dark" : "")}>
            mode
          </RButton>
          <RButton onClick={() => setIsStrached(!isStrached)}>Stratch</RButton>
          <RButton onClick={() => setTheme("theme-blue")}>Blue</RButton>
          <RButton onClick={() => setTheme("theme-dark-blue")}>
            Dark blue
          </RButton>
          <RButton onClick={() => setTheme("theme-purple")}>Purple</RButton>
          <RButton onClick={() => setTheme("theme-green")}>Green</RButton>
          <RButton onClick={() => setTheme("theme-red")}>Red</RButton>
          <RButton onClick={() => setTheme("theme-yellow")}>Yellow</RButton>
        </Header>
        <Container>
          <Sidebar isCollapsed={isCollapsed} navConfig={navConfig} />
          <Suspense fallback={<div>loading. . .</div>}>
            <Router />
          </Suspense>
        </Container>
      </div>
    </div>
  );
}

export default App;
