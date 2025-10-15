interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Youlai',
    description: `基于 Vue3、Vite、TypeScript 和 Element-Plus 搭建的极简开箱即用企业级后台管理前端模板`,
    imgSrc: '/static/images/youlai.png',
    href: 'http://youlai.calmchen.com',
  }
]

export default projectsData
