import {request} from './request.js'
//面向首页开发
export function getHomeData(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,page
    }
  })
}