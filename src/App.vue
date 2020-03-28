<template>
    <div>
      <router-view/>
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>


<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'


  export default {
    mounted(){
      this.getAddress()
      this.getUserinfo()
    },
    methods:{
      ...mapActions(['getAddress','getUserinfo'])
    },
    components:{
      FooterGuide
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">

</style>
