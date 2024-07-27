import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarZh: SidebarConfig = {
  "/react/": [
    {
      text: "react",
      children: ["/react/README.md"],
    },
  ],
  "/vue/": [
    {
      text: "vue",
      children: ["/vue/README.md"],
    },
  ],
  "/xss/": [
    {
      text: "xss",
      children: ["/xss/README.md"],
    },
  ],
  "/interview/": [
    {
      text: "面试题",
      children: ["/interview/es6.md"],
    },
  ],
};
