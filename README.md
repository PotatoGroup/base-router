# base-router
前端路由的本质，通过修改hash/path触发回调函数执行，加载路由对应资源，达到不刷新更新UI的效果，在spa应用中广泛使用
## hash router
通过修改location.hash值，触发hashchange事件，执行回调函数更新UI
```typescript
 window.addEventListener(
      "hashchange",
      this.handleCallback.bind(this),
      false
    );
```
## history router
通过修改location.path值，触发popstate事件，执行回调函数更新UI
```typescript
 window.addEventListener(
      "popstate",
      this.handleCallback.bind(this),
      false
    );
```
注意：浏览器前进、后退、刷新、超链接点击不会出发popstate事件