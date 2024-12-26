# 插件化（微内核）

```js
class Doc {
    constructor() {
        this.plugins = []
    }

    use(plugin) {
        this.plugins.push(plugin)
    }

    run() {
        this.plugins.forEach(plugin => {
            plugin.fn(this) // this => doc构造函数
        })
    }
}

const doc = new Doc()

// 定义插件协议
const textPlugin = {
    name: 'text',
    fn(doc) {
        console.log(doc, 'text');
        return 'text'
    }
}

const imagePlugin = {
    name: 'image',
    fn(doc) {
        console.log(doc, 'image');
        return 'image'
    }
}

doc.use(textPlugin)
doc.use(imagePlugin)

doc.run()
```

# 面试回答：

注意：不要一上来就聊技术、要先聊具体的业务场景


# SSR：

- SSR：服务端渲染 在服务器端将网页内容渲染为完整的html，然后发送到客户端浏览器进行显示
- CSR：客户端渲染 在浏览器通过js动态生成网页内容
- SSG：静态站点

现在的服务端渲染技术：即保留服务端渲染内容，又保留已有的框架


有些东西服务端无法渲染，比如：canvas、事件绑定、层叠样式表的解析、htmldom和cssom结合



