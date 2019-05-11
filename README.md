# travel

> Vue Study

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
# 打包，将 src 代码打包为服务器可以直接运行的
# 打包后的文件默认在 dist 文件夹下
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 可能存在的问题

白屏可能是由于浏览器不支持 ES6 语法导致

可以使用 `npm install babel-polyfill --save` 然后在入口 main.js 中 `import babel-polyfill` 解决

## 异步组件

使用异步加载方式，避免所有的业务逻辑打包后在一个 js 文件中；
适用于打包后生成的 app.js 文件太大的情况，不然多发 http 请求反而更加不好

改用异步组件非常简单，在很多地方都可以用，例如 router 下的 index.js

```javascript
 import Vue from 'vue'
 import Router from 'vue-router'
 
 Vue.use(Router)
 
 export default new Router({
   routes: [
     {
       path: '/',
       name: 'Home',
       component: () => import('@/pages/home/Home')
     },
     {
       path: '/city',
       name: 'City',
       component: () => import('@/pages/city/City')
     },
     {
       path: '/detail/:id',
       name: 'Detail',
       component: () => import('@/pages/detail/Detail')
     }
   ],
   scrollBehavior (to, from, savedPosition) {
     return {x: 0, y: 0}
   }
 })
 ```

即，把 `import Router from 'vue-router'` 更换为箭头函数 `() => import('@/xxx')`
