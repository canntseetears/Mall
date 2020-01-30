export default {
  cartLength(state){
    //getter默认参数state
    return state.cartList.length
  },
  cartL(state){
    return state.cartList
  }
  //使用mapGettesr映射
}