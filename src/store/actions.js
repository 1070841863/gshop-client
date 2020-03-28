/*
通过mutation间接更新多个state对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  ClEAR_USERINFO,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  ODD_FOOD_COUNT
} from './mutation-types'

import {
  reqAddress,
  reqFoodTypes,
  reqShops,
  reqUserinfo,
  reqLogout,
  reqInfo,
  reqGoods,
  reqRatings
} from '../api'

export default{
    //异步获取地址
    async getAddress({commit,state}) {
      //发送异步ajax请求
      const geohash=state.latitude+","+state.longitude
      const result=await reqAddress(geohash)
      if(result.code===0){
        //提交一个mutation
        const address=result.data
        commit(RECEIVE_ADDRESS,{address})
      }


    },
   //异步获取分类列表
  async getFoodTypes({commit}) {
    //发送异步ajax请求
    const result=await reqFoodTypes()
    if(result.code===0){
      //提交一个mutation
      const FoodTypes=result.data
      commit(RECEIVE_FOODTYPES,{FoodTypes})
    }


  },
   //异步获取商家列表
  async getshops({commit,state}) {
    //发送异步ajax请求
    const {longitude,latitude}=state
    const result=await reqShops(longitude,latitude)
    if(result.code===0){
      //提交一个mutation
      const shops=result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },

  //同步记录用户信息
  SaveUserinfo({commit},userinfo){
    commit(RECEIVE_USERINFO,{userinfo})
  },

  //异步获取用户信息实现自动登录
  async getUserinfo({commit}){
    const result=await reqUserinfo();
    if(result.code===0){
      const userinfo=result.data
      commit(RECEIVE_USERINFO,{userinfo})
    }
  },

  //异步退出登录
  async logout({commit}){
    const result=await reqLogout();
    if(result.code===0){
      commit(ClEAR_USERINFO)
    }
  },
  async getGoods({commit},callback){
    const result=await reqGoods();
    if(result.code===0){
      const goods=result.data
      commit(RECEIVE_GOODS,{goods})
      callback&&callback();//数据填充完成之后调用回调
    }
  },
  async getRatings({commit}){
    const result=await reqRatings();
    if(result.code===0){
      const ratings=result.data
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  async getInfo({commit}){
    const result=await reqInfo();
    if(result.code===0){
      const info=result.data
      commit(RECEIVE_INFO,{info})
    }
  },

  //同步更新食物中的count数量
  updateCount({commit},{flag,food}){
      if(flag) {
        commit(ODD_FOOD_COUNT, {food})
      }else {
        commit(ADD_FOOD_COUNT,  {food})
      }

  }

  //同步清空购物车
  clearCart({commit}){

  }


}
