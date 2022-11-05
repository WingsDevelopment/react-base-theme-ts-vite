import RIconify from "../../app/components/RIconify";
import { TagRoutes } from "../../app/features/Tag/routes";
import { NavConfigItem } from "../../app/pages/App/App";

export const navConfig: NavConfigItem[] = [
  {
    name: "Home",
    icon: <RIconify icon="file-icons:test-rust" />,
    path: "/home",
  },
  {
    name: "Settings",
    icon: <RIconify icon="vscode-icons:file-type-light-testjs" />,
    path: "/settings",
  },
  {
    name: "Test",
    icon: <RIconify icon="fluent-emoji:test-tube" />,
    path: "/test",
  },
  {
    name: "Users",
    icon: <RIconify icon="vscode-icons:folder-type-vscode-test3" />,
    path: "/users",
  },
  {
    name: "Tags",
    icon: <RIconify icon="healthicons:intestinal-pain-negative" />,
    path: TagRoutes.index,
  },
  {
    name: "Home1",
    icon: <RIconify icon="noto:test-tube" />,
    path: "/home1",
  },
  {
    name: "Test1",
    icon: <RIconify icon="healthicons:malaria-testing" />,
    path: "/test1",
  },
  {
    name: "Users1",
    icon: <RIconify icon="healthicons:intestinal-pain-negative" />,
    path: "/users1",
  },
  {
    name: "Settings1",
    icon: <RIconify icon="simple-icons:minetest" />,
    path: "/settings1",
  },

  {
    name: "Home2",
    icon: <RIconify icon="logos:testlodge" />,
    path: "/home2",
  },
  {
    name: "Test2",
    icon: <RIconify icon="logos:testcafe" />,
    path: "/test2",
  },
  {
    name: "Users2",
    icon: <RIconify icon="logos:user-testing-icon" />,
    path: "/users2",
  },
  {
    name: "Settings2",
    icon: <RIconify icon="vscode-icons:file-type-light-testjs" />,
    path: "/settings2",
  },

  {
    name: "Home3",
    icon: <RIconify icon="file-icons:test-rust" />,
    path: "/home3",
  },
  {
    name: "Test3",
    icon: <RIconify icon="fluent-emoji:test-tube" />,
    path: "/test3",
  },
  {
    name: "Users3",
    icon: <RIconify icon="vscode-icons:folder-type-vscode-test3" />,
    path: "/users3",
  },
  {
    name: "Settings3",
    icon: <RIconify icon="vscode-icons:file-type-light-testjs" />,
    path: "/settings3",
  },
  {
    name: "Home4",
    icon: <RIconify icon="file-icons:test-rust" />,
    path: "/home4",
  },
  {
    name: "Test4",
    icon: <RIconify icon="fluent-emoji:test-tube" />,
    path: "/test4",
  },
  {
    name: "Users4",
    icon: <RIconify icon="vscode-icons:folder-type-vscode-test3" />,
    path: "/users4",
  },
  {
    name: "Settings4",
    icon: <RIconify icon="vscode-icons:file-type-light-testjs" />,
    path: "/settings4",
  },
];
