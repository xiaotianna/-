# Vue 性能优化

## 路由懒加载

动态导入，`build` 后会进行分包，以便进行预加载

> 参考：[首屏加载优化-预加载](./首屏加载优化.html#_1-preload-预加载)

## 组件按需加载

- `Suspense` 异步组件
- `defineAsyncComponent` 异步组件
```js
import { defineAsyncComponent } from 'vue'
const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
```

## keep-alive缓存组件

作用：在多个组件间动态切换时缓存被移除的组件实例。
