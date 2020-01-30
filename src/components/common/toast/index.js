import Toast from './Toast';
const toast={};
toast.install=function(Vue) {
  //创建组件构造器
  const toastConstructor=Vue.extend(Toast);
  //创建组件对象
  const toast = new toastConstructor();
  //组件对象挂载到元素
  toast.$mount(document.createElement('div'));
  //toast.$el对应就是div
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast=toast;
}
export default toast;