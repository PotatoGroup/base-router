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
注意：调用 history.pushState() 或者 history.replaceState() 不会触发 popstate 事件。只有浏览器的前进、后退会触发popstate事件（history.go, history.back, history.forward）