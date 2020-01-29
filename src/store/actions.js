export default {
  //异步操作，判断逻辑，mutation放单一逻辑
  addC(context,payload){
    /* let oldPro=null;
    for (const iterator of state.cartList) {
      if(iterator.id===payload.id){
        oldPro=iterator
      }
    } */
    let oldPro=context.state.cartList.find(item => item.id === payload.id)
    if(oldPro){
      //oldPro.count += 1
      context.commit('addCounter',oldPro)
    }else{
      payload.count =1
      //state.cartList.push(payload)
      context.commit('addToCart',payload)
    }
  }
}