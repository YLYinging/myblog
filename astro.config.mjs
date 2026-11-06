import { defineConfig } from 'astro/config';
// 发布到 GitHub Pages 前设置环境变量 PUBLIC_GITHUB_USERNAME / PUBLIC_REPO_NAME。
// 或者直接修改下面的默认值。仓库建议命名为 my-space。
const username = process.env.PUBLIC_GITHUB_USERNAME;
const githubSite = username && username !== 'YOUR_GITHUB_USERNAME' ? `https://${username}.github.io` : undefined;
const repo = process.env.PUBLIC_REPO_NAME || 'my-space';
const customDomain = process.env.PUBLIC_SITE_URL;
export default defineConfig({
  site: customDomain || githubSite,
  base: (customDomain || repo === `${username}.github.io`) ? '/' : `/${repo}`,
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
});
