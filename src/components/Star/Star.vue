<template>
    <div class="star" :class="'star-'+size">
      <span class="star-item" v-for="(sc,index) in starList" :class="sc" :key="index">
      </span>
    </div>
</template>


<script>
  export default {
    props:{
      score:Number,
      size:Number
    },
    computed:{
      starList(){
        const {score}=this
        const arr=[]
        //3.2 3个on 2个off
        //3.5 3个on 1个half 1个off
        const onNumber=Math.floor(score)
        //添加on
        for(let i=0;i<onNumber;i++){
          arr.push('on')
        }
        //添加half
        if(score*10-onNumber*10>=5){
          arr.push('half')
        }
        //添加off
        while(arr.length<5){
          arr.push('off')
        }
        return arr
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
