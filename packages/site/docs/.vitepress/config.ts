import { version } from "../../../components/package.json";
import { defineConfig } from "vitepress";
import { vitePluginVitepressDemo } from "vite-plugin-vitepress-demo";

export default defineConfig({
  vite: {
    plugins: [
      vitePluginVitepressDemo({
        glob: ["**/demo/**/*.vue"], // 指定需要处理的文件
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
  appearance: false, // 夜间 模式切换
  title: "stDesign UI",
  description: "Vue基础组件库",
  lang: "zh-CN",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  markdown: {
    lineNumbers: false // 是否显示行数，默认false
  },
  themeConfig: {
    siteTitle: "stDesign UI",
    logo: "/logo.png",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/T34-active/stDesign' }
      // 自定义icon
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: 'https://www.npmjs.com/package/vue-amazing-ui'
      // }
    ],
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/getting-started" },
      { text: "组件", link: "/components/Button" },
      {
        text: version,
        items: [
          {
            text: "变更日志",
            link: "/changelog/CHANGELOG.md",
          },
        ],
      },
    ],
    sidebar: {
      "/components/": [
        {
          text: "基础组件",
          items: [
            { text: "Button 按钮", link: "/components/Button" },
            { text: "Tooltip 文字提示", link: "/components/Tooltip" },
            { text: "Notes 文字提示", link: "/components/Notes" },
          ],
        },
      ],
    },
  },
});
