import { lazy, Suspense, useState } from "react";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { useThemeContext } from "../../../theme-code/providers/ThemeProvider";
import { RButton } from "../../../theme-code/components/wrappers/RButton";

export interface NavConfigItem {
  name: string;
  icon: string;
  path: string;
  active?: boolean;
}

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { mode, setMode, theme, isStrached, setIsStrached } = useThemeContext();

  const navConfig: NavConfigItem[] = [
    {
      name: "Home",
      icon: "home",
      path: "/",
      active: true,
    },
    {
      name: "Test",
      icon: "settings",
      path: "/test",
    },
    {
      name: "Users",
      icon: "users",
      path: "/users",
    },
    {
      name: "Settings",
      icon: "settings",
      path: "/settings",
    },
  ];

  return (
    <div className={`${mode} ${theme}`}>
      <div className="bg-slate-50 dark:bg-slate-800 dark:text-slate-50">
        <Header>
          <RButton onClick={() => setIsCollapsed(!isCollapsed)}>TT</RButton>
          <RButton onClick={() => setMode(mode === "" ? "dark" : "")}>
            mode
          </RButton>
          <RButton onClick={() => setIsStrached(!isStrached)}>Stratch</RButton>
          <RButton onClick={() => setIsCollapsed(!isCollapsed)}>TT</RButton>
          <RButton onClick={() => setIsCollapsed(!isCollapsed)}>TT</RButton>
        </Header>
        <Container>
          <Sidebar isCollapsed={isCollapsed} navConfig={navConfig} />
          <Content isStrached={isStrached}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<LazyHome />} />
                <Route path="test" element={<LazyTestPage />} />
                <Route path="settings" element={<LazySettings />} />
                <Route path="users" element={<LazyUsers />} />
              </Routes>
            </Suspense>
          </Content>
        </Container>
      </div>
    </div>
  );
}

const LazyHome = lazy(() => import("../Home"));
const LazyTestPage = lazy(() => import("../TestPage"));
const LazySettings = lazy(() => import("../Settings"));
const LazyUsers = lazy(() => import("../Users"));

export default App;
