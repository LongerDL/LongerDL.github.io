export default {
  themeConfig: {
    logo: "https://vitepress.dev/vitepress-logo-mini.svg",
    siteTitle: "vitePress",
    nav: [
      { text: "API", link: "/guide/other/" },
      { text: "演练场", link: "/guide/start/" },
      {
        text: "文档",
        items: [
          { text: "文档1", link: "/guide/other/" },
          { text: "文档2", link: "/guide/other/one.md" },
          { text: "文档3", link: "/guide/other/two.md" },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "开始",
          items: [
            { text: "简介", link: "/guide/start/" },
            { text: "快速上手", link: "/guide/start/one" },
          ],
        },
        {
          text: "其他",
          items: [
            { text: "主页111", link: "/guide/other/" },
            { text: "路由1", link: "/guide/other/one" },
            { text: "路由2", link: "/guide/other/two" },
          ],
        },
      ],
    },
  },
};
