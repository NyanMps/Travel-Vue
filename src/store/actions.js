export default {
  changeCity (ctx, name) {
    // 调用 mutations
    ctx.commit('changeCity', name)
  }
}
