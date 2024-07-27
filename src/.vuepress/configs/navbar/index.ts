import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarZh: NavbarConfig = [
  {
    text: "react",
    link: "/react/",
  },
  {
    text: "vue",
    link: "/vue/",
  },
  {
    text: "安全",
    children: [
      {
        text: "xss",
        children: ["/xss/"],
      },
    ],
  },
];
