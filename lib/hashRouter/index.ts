export default class HashRouter {
  private routers = new Map();
  constructor() {
    window.addEventListener(
      "hashchange",
      this.handleCallback.bind(this),
      false
    );
  }
  register(path: string, callback: Function) {
    this.routers.set(path, callback);
  }
  revoke(path: string) {
    this.routers.delete(path);
  }
  revokeAll() {
    this.routers.clear();
  }
  private handleCallback() {
    const hash = location.hash.slice(1);
    let handle;
    if (!hash) {
        
    }
  }
  private NotFound() {}
}
