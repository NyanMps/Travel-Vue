export default {
  changeCity (state, name) {
    state.city = name
    // 本地存储 (低版本浏览器或者隐身模式可能会抛异常)
    try {
      localStorage.city = name
    } catch (e) {
    }
  }
}
