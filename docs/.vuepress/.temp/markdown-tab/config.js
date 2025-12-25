import { CodeTabs } from "D:/whj/test1/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_046a5f33178463a14a14b7274b7403da/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/whj/test1/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_046a5f33178463a14a14b7274b7403da/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/whj/test1/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_046a5f33178463a14a14b7274b7403da/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
