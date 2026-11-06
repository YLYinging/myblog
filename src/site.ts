export const SITE = {
  title: 'My Space',
  author: 'yuanliangyong',
  description: '记录 Java 学习、Linux 排错、Mac 开发环境和项目实践。',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL?.trim(),
  github: import.meta.env.PUBLIC_GITHUB_PROFILE?.trim() || 'https://github.com/YLYinging',
  slogan: 'Stay curious. Keep building.'
};
// GitHub Pages 仓库子路径前缀。永远通过 path() 创建站内链接。
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const path = (route = '/') => `${base}/${route.replace(/^\/+/, '')}`;
export const dateText = (date: Date) => new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(date);
