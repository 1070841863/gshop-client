/*
直接更新state多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  ClEAR_USERINFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  ODD_FOOD_COUNT,
  CLEAR_CAR
} from './mutation-types'

export default{
  [RECEIVE_ADDRESS](state,{address}){
      state.address=address
  },
  [RECEIVE_FOODTYPES](state,{FoodTypes}){
    state.FoodTypes=FoodTypes
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops
  },
  [RECEIVE_USERINFO](state,{userinfo}){
    state.userinfo=userinfo
  },
  [ClEAR_USERINFO](state){
    state.userinfo=[]
  },
  [RECEIVE_GOODS](state,{goods}){
    state.goods=goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings=ratings
  },
  [RECEIVE_INFO](state,{info}){
    state.info=info
  },
  [ODD_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--
      if(food.count===0){
        //删除food
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [ADD_FOOD_COUNT](state,{food}){
    if(!food.count){
      // food.count=1;新增属性（没有数据绑定）
      /*
      对象
      属性名
      属性值
       */
      Vue.set(food,"count",1)
      state.cartFoods.push(food)
    }else{
      food.count++;
    }
  },

  [CLEAR_CAR](state){
    //清除food的count
    state.cartFoods.forEach(food=>food.count=0);
    //移除购物车所有对象
    state.cartFoods=[]
  }
}
