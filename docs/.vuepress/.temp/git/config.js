import { GitContributors } from "D:/whj/test1/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_0256b9dd0fb0189be33dcefd2f57d036/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/whj/test1/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_0256b9dd0fb0189be33dcefd2f57d036/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
