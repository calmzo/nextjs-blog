# 我的技术博客

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.5-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

一个基于 Next.js 15 + TypeScript + Tailwind CSS 构建的现代化技术博客，专注于分享编程经验、技术教程和开发心得。

## ✨ 特性

- 🚀 **Next.js 15** - 使用最新的 Next.js 框架，支持 App Router
- ⚡ **TypeScript** - 完整的类型安全支持
- 🎨 **Tailwind CSS 4.0** - 现代化的 CSS 框架
- 📝 **MDX 支持** - 在 Markdown 中直接使用 React 组件
- 🌙 **深色模式** - 支持系统主题自动切换
- 📱 **响应式设计** - 完美适配各种设备
- 🔍 **全文搜索** - 基于 Kbar 的快速搜索功能
- 📊 **代码高亮** - 支持多种编程语言的语法高亮
- 📈 **SEO 优化** - 完整的 SEO 配置和元数据
- 💬 **评论系统** - 集成 Giscus 评论系统
- 📧 **邮件订阅** - 支持邮件订阅功能

## 🛠️ 技术栈

- **框架**: Next.js 15.2.4
- **语言**: TypeScript 5.1.3
- **样式**: Tailwind CSS 4.0.5
- **内容管理**: Contentlayer2
- **UI 组件**: Headless UI
- **主题**: next-themes
- **搜索**: Kbar
- **评论**: Giscus
- **代码高亮**: rehype-prism-plus
- **数学公式**: KaTeX

## 📚 博客内容

本博客主要分享以下技术内容：

### 编程语言
- **PHP** - Laravel 框架、Hyperf 微服务、PHP 工具收集
- **Java** - 环境配置、Maven 设置、IDEA 使用技巧
- **Go** - Go 语言入门教程
- **JavaScript/TypeScript** - 前端开发相关

### 数据库
- **MySQL** - 慢查询优化、事务锁机制、MVCC
- **Elasticsearch** - 全文搜索实现

### 开发工具
- **Git** - 版本控制、常用命令、效率提升
- **JetBrains IDE** - 插件推荐、破解方法、基本设置
- **Maven** - 项目管理工具配置

### 系统设计
- **秒杀系统** - 高并发系统设计
- **分库分表** - 数据库扩展方案
- **Pipeline 模式** - 设计模式应用

### 运维部署
- **ELK 日志系统** - Linux 环境部署
- **Docker** - 容器化部署
- **Hexo** - 静态博客搭建

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看博客。

### 构建生产版本

```bash
# 构建项目
npm run build
# 或
yarn build

# 启动生产服务器
npm run start
# 或
yarn start
```

## 📁 项目结构

```
nextjs-blog/
├── app/                    # Next.js App Router 页面
│   ├── about/             # 关于页面
│   ├── blog/              # 博客文章页面
│   ├── projects/          # 项目展示页面
│   └── tags/              # 标签页面
├── components/            # React 组件
│   ├── social-icons/      # 社交媒体图标
│   └── ...
├── data/                  # 数据文件
│   ├── authors/           # 作者信息
│   ├── blog/              # 博客文章 (MDX 格式)
│   └── siteMetadata.js    # 网站元数据
├── layouts/               # 页面布局组件
├── public/                # 静态资源
│   └── static/            # 图片、图标等
└── styles/                # 样式文件
    └── globals.css        # 全局样式
```

## 📝 添加新文章

1. 在 `data/blog/` 目录下创建新的 `.mdx` 文件
2. 在文件头部添加 frontmatter：

```yaml
---
title: '文章标题'
date: '2024-01-01'
tags: ['标签1', '标签2']
summary: '文章摘要'
authors: ['default']
---
```

3. 使用 Markdown 语法编写文章内容
4. 支持在文章中使用 React 组件

## 🎨 自定义配置

### 网站信息

编辑 `data/siteMetadata.js` 文件：

```javascript
const siteMetadata = {
  title: '你的博客标题',
  author: '你的名字',
  description: '博客描述',
  email: 'your-email@example.com',
  github: 'https://github.com/yourusername',
  // ... 其他配置
}
```

### 主题颜色

修改 `tailwind.config.js` 中的颜色配置：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // 自定义主色调
        }
      }
    }
  }
}
```

## 📊 性能优化

- ✅ 图片自动优化 (next/image)
- ✅ 代码分割和懒加载
- ✅ 静态生成 (SSG)
- ✅ 增量静态再生 (ISR)
- ✅ 字体优化
- ✅ SEO 优化

## 🔧 开发工具

- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Husky** - Git hooks
- **lint-staged** - 提交前代码检查

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 邮箱: chenzo0220@163.com
- GitHub: [@calmzo](https://github.com/calmzo)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！