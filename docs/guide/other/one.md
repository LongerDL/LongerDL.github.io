## react 性能优化

1. react 内置的 suspense 和 lazy 做路由懒加载
2. pureComponent，子组件不依赖父组件的数据，父组件重新渲染不会导致子组件重新渲染

## 工程化

1. 使用 vite 搭建 vue3 项目 --- npm create vite@latest
2. 安装`eslint、prettier`检查代码规范和格式化代码 --- npm init @eslint/config，创建.prettierrc 文件，npm i prettier -D，在 package.json 文件中写下"prettier": "prettier --write ."，执行`npm run prettier`即可格式化所有文件的代码
3. 自动导入 vue 模块组件和本地模块组件 --- npm install -D unplugin-vue-components unplugin-auto-import，然后在 vite 中进行相应的配置
4. 配置@作为根路径，需要同时配置`vite.config.ts和tsconfig.json`文件
5. 全局样式变量和 icon 图标 --- npm install vite-plugin-svg-icons -D，安装全局配置 icon 和 svg 图标并且封装 svgIcon 组件方便复用，可以使用`--variable`的方式定义 css 变量，然后使用`var(--variable)`使用 css 变量。这里使用 less 变量方便工程化，另外使用`reset-css`库初始化 css 样式。
6. 安装 axios 并进行二次封装，对于接口请求函数和类型规定应该分为两个 ts 文件写，全局配置 API 接受到的结果
7. 安装 mock，在 src 下新建 mock 文件夹配置对应接口的 mock 数据，注意：mock 拦截中的请求是区分大小写的！！本来我写了一个'GET',半天找不出来错误，后来发现应该是拦截'get'，而不是'GET'
8. 安装 router 和 pinia 做路由管理和状态缓存，路由需要使用懒加载做优化，另外集成 ant-design-vue
9. 创建 utils 文件夹，封装 storage 工具函数
